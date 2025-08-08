const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');

// List all users (admin only)
router.get('/', auth, roles('Admin'), async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

// Update user (admin only)
router.put('/:id', auth, roles('Admin'), async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
  res.json(user);
});

// Delete user (admin only)
router.delete('/:id', auth, roles('Admin'), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

module.exports = router;