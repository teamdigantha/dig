const mongoose = require('mongoose');

const ApprovalSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  stage: { type: String, required: true },
  approver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'revision'], default: 'pending' },
  comments: { type: String },
  timestamp: { type: Date, default: Date.now },
  auditTrail: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Audit' }],
});

module.exports = mongoose.model('Approval', ApprovalSchema);