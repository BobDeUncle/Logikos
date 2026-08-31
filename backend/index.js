const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Mongo — MONGO_URL comes from env, set in docker-compose
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Mongo connection error:', err));

// Simple test schema/model
const Message = mongoose.model('Message', new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
}));

// Test route: GET returns all messages
app.get('/api/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// Test route: POST adds a message
app.post('/api/messages', async (req, res) => {
  const msg = new Message({ text: req.body.text });
  await msg.save();
  res.json(msg);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));