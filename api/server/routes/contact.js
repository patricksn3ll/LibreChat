const express = require('express');
const sendEmail = require('../utils/sendEmail');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }
  try {
    await sendEmail({
      email: process.env.CONTACT_EMAIL_TO || process.env.EMAIL_FROM,
      subject: 'Contact Form Submission',
      payload: {
        name: email,
        message,
      },
      template: 'contact.html',
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

module.exports = router;
