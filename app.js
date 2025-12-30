const express = require('express');
const app = express();

// A simple function we can unit test
const convertCelsiusToFahrenheit = (c) => (c * 9/5) + 32;


//health route API
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});


//Weather route API
app.get('/weather', (req, res) => {
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API Key missing' });
  }
  res.json({ city: 'London', temp: convertCelsiusToFahrenheit(15) });
});

module.exports = { app, convertCelsiusToFahrenheit };