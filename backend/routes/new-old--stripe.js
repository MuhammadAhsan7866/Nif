const express = require("express");
const router = express.Router();
const Register = require("../models/Nif");
const stripe = require("stripe")(
  "sk_test_51N5BwHJOZhSn4xHaL3zL0Mq1Wlz4gwFXHrReChJ2tv6eoo8rWM7IX7D9cSESZ03LrmpxUyhK841SeYOo5W3tGu1d00dQdVLbRp"
);
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const Nif = require("../models/Nif");
const sendEmail = require("../utils/EmailUtils");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post(
  "/api/v1/payment/create-checkout-session",
  bodyParser.json({ type: "application/json" }),
  upload.any(), 
  async (req, res) => {
    try {
      const files = req.files;
      console.log(files);
      const imageUrls = files.map((file) => {
        return `${req.protocol}://${req.get('host')}/${file.path}`;
      });

      console.log(req.body, imageUrls);
      
      const priceId = "price_1PNIMmJOZhSn4xHaF9RBEI1w";
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
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        metadata: {
          firstObj: JSON.stringify({
            ...firstObj,
          }),
          secondObj: JSON.stringify({
            ...secondObj,
          }),
        },
        success_url: "http://localhost:3000/OrderForm",
        cancel_url: "http://localhost:3000/OrderForm",
      });
      return res.status(200).json({ url: session.url, sessionId: session.id });
    } catch (error) {
      console.log(error, "  here is errro ");
      return res.status(500).json("Internal server error");
    }
  }
);

router.post(
  "/api/v1/payment/success",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const signature = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        "whsec_f47e97b7a3b90919876d29ae85255a9fa2d00ae9298f1f3fa735eba74e4ec3bf"
      );
    } catch (err) {
      console.error(err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case "checkout.session.completed":
        {
          const session = event.data.object;
          const obj1 = JSON.parse(session.metadata.firstObj);
          const obj2 = JSON.parse(session.metadata.secondObj);
          const data = { ...obj1, ...obj2 };
          data.passportInformation = {
            surname: data.surname,
            middleName: data.middleName,
            dob: data.dob,
            passportIssueCountry: data.passportIssueCountry,
            passportNumber: data.passportNumber,
            placeOfBirth: data.placeOfBirth,
          };

          console.log(JSON.stringify(data), "    stringify data  ");

          await Nif.create(data);
          sendEmail(JSON.stringify(data));
        }
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return res.status(200).json({ received: true, event: event.data.object });
  }
);

module.exports = router;
