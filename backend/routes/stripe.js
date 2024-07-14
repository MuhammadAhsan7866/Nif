const express = require('express');
const router = express.Router();
const Register = require('../models/Nif');
const stripe = require('stripe')('sk_test_51N5BwHJOZhSn4xHaL3zL0Mq1Wlz4gwFXHrReChJ2tv6eoo8rWM7IX7D9cSESZ03LrmpxUyhK841SeYOo5W3tGu1d00dQdVLbRp');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const Nif = require('../models/Nif');
const sendEmail = require('../utils/EmailUtils');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const uploadFields = [
  { name: 'passport', maxCount: 1 },
  { name: 'licenseFront', maxCount: 1 },
  { name: 'licenseBack', maxCount: 1 },
  { name: 'statement', maxCount: 1 },
  { name: 'bill', maxCount: 1 },
  { name: 'document', maxCount: 1 }
];
router.post("/api/v1/payment/create-checkout-session", bodyParser.json({ type: "application/json" }), upload.fields(uploadFields), async (req, res) => {
  try {

    if (!req.files || !req.files.passport) {
      return res.status(400).send('Passport is compulsory.');
    }

    const documents = [];

    // Process each file input field
    Object.keys(req.files).forEach(fieldname => {
      req.files[fieldname].forEach(file => {
        documents.push({
          url: `${req.protocol}://${req.get('host')}/uploads/${file.filename}`,
          type: fieldname
        });
      });
    });

    const priceId = 'price_1PNIMmJOZhSn4xHaF9RBEI1w';
    const lineItems = [
      {
        price: priceId,
        quantity: 1,
      },
    ];

    const keys = Object.keys(req.body);
    const midPoint = Math.ceil(keys.length / 2);

    const firstHalfKeys = keys.slice(0, midPoint);
    const secondHalfKeys = keys.slice(midPoint);

    const firstObj = {};
    const secondObj = {};

    for (const key of firstHalfKeys) {
      firstObj[key] = req.body[key];
    }

    for (const key of secondHalfKeys) {
      secondObj[key] = req.body[key];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      metadata: {
        firstObj: JSON.stringify({
          ...firstObj
        }),
        secondObj: JSON.stringify({
          ...secondObj
        }),
        documents:JSON.stringify(documents)
      },
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/NifForm',
    });
    return res.status(200).json({ url: session.url, sessionId: session.id });

  } catch (error) {
    console.log(error, '  here is errro ');
    return res.status(500).json("Internal server error")
  }
});

router.post("/api/v1/payment/success", bodyParser.raw({ type: "application/json" }), async (req, res) => {
  const signature = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, "whsec_f47e97b7a3b90919876d29ae85255a9fa2d00ae9298f1f3fa735eba74e4ec3bf");
  } catch (err) {
    console.error(err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'checkout.session.completed':
      {
        const session = event.data.object;
        const obj1 = JSON.parse(session.metadata.firstObj);
        const obj2 = JSON.parse(session.metadata.secondObj);
        const documents = JSON.parse(session.metadata.documents);
        const data = { ...obj1, ...obj2 };
        data.passportInformation = {
          surname: data.surname,
          middleName: data.middleName,
          dob: data.dob,
          passportIssueCountry: data.passportIssueCountry,
          passportNumber: data.passportNumber,
          placeOfBirth: data.placeOfBirth
        };
        data.documents = documents;

        console.log(JSON.stringify(data), '    stringify data  ');

        try {
          await Nif.create(data);
          sendEmail(JSON.stringify(data));
        } catch (error) {
          return res.status(500).json(error);
        }

      }
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return res.status(200).json({ received: true, event: event.data.object });

});

module.exports = router;
