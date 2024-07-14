const express = require('express');
const router = express.Router();
const Register = require('../models/Nif');
const sendEmail = require('../utils/EmailUtils');

// Get all registered users
router.get('/', async (req, res) => {
  try {
    await sendEmail();
    res.json("sent");
  } catch (err) {
    res.json({ message: err });
  }
});

// Register a new user
router.post('/', async (req, res) => {
  const user = new Register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    personalInfo: {
      age: req.body.personalInfo.age,
      gender: req.body.personalInfo.gender
    }
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
