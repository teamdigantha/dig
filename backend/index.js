require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

require('./models/User');
require('./models/Event');
require('./models/Approval');
require('./models/Vendor');
require('./models/Budget');
require('./models/File');
require('./models/Notification');
require('./models/Comment');
require('./models/Audit');
require('./models/Quotation');

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Diganta backend running' });
});

// TODO: Import routes and schemas here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});