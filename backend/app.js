const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

module.exports = app;
