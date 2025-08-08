const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Not required for OAuth
  role: { type: String, enum: ['Student Organizer', 'Faculty Coordinator', 'HOD', 'Principal', 'Admin', 'Vendor', 'Treasurer', 'Social Media Manager'], required: true },
  googleId: { type: String },
  department: { type: String },
  status: { type: String, enum: ['active', 'pending', 'suspended'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);