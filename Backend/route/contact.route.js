import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const contactData = req.body;
  console.log(contactData);
  // Here you would handle the contact data, e.g., save to the database or send an email
  res.status(200).json({ message: 'Contact form submitted successfully!' });
});

export default router;
