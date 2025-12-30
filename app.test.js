const request = require('supertest');
const { app, convertCelsiusToFahrenheit } = require('./app');

describe('Logic Tests', () => {
  test('Celsius to Fahrenheit conversion', () => {
    expect(convertCelsiusToFahrenheit(0)).toBe(32);
    expect(convertCelsiusToFahrenheit(100)).toBe(212);
  });
});

describe('API Endpoints', () => {
  test('GET /health should return 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('healthy');
  });
});