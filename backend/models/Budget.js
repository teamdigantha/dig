const mongoose = require('mongoose');

const BudgetItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['requested', 'approved', 'spent'], default: 'requested' },
  file: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
});

const BudgetSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  category: { type: String, required: true },
  items: [BudgetItemSchema],
  totalRequested: { type: Number, default: 0 },
  totalApproved: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'approved', 'reimbursed'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Budget', BudgetSchema);