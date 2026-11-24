const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send(`
    <h1>Privacy Policy - Aso Crest Suites Abuja</h1>
    <p>We collect guest names, phone numbers, and reservation dates solely to process room bookings and respond to inquiries via WhatsApp.</p>
    <p>Your information is never sold or shared with third parties.</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
