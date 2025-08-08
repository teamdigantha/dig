const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  department: { type: String, required: true },
  objectives: { type: String },
  date: { type: Date, required: true },
  time: { type: String },
  venue: { type: String, required: true },
  estimatedBudget: { type: Number },
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['draft', 'pending', 'approved', 'rejected', 'completed', 'archived'], default: 'draft' },
  approvals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Approval' }],
  poster: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
  vendors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }],
  budgetItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Budget' }],
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  auditTrail: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Audit' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);