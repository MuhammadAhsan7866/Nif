const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
const stripeRoutes = require('./routes/stripe');
app.use('/', stripeRoutes);
// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/braintree', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
const postRoutes = require('./routes/posts');
const registerRoutes = require('./routes/nif');

app.use('/posts', postRoutes);
app.use('/nif', registerRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
