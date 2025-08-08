const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['pdf', 'jpg', 'png', 'docx', 'other'], required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  metadata: { type: Object },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('File', FileSchema);