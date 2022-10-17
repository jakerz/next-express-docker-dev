'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

function updateDatabase(data) {
  ... // update the database
    return newValue;
}

// Middleware
app.use(bodyParser);
// Create POST endpoint at /updatestate
app.post('/updatestate', (req, res) => {
    const newValue = updateDatabase(res.body);
    // Respond with JSON valuee returned from DB update fn
    res.json(newValue);
});

// Serverless http is converting our express app above
// into something lambda functions can use
module.exports.handler = serverless(app);