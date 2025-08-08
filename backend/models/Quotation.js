const mongoose = require('mongoose');

const QuotationItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
});

const QuotationSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  items: [QuotationItemSchema],
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  file: { type: mongoose.Schema.Types.ObjectId, ref: 'File' },
}, { timestamps: true });

module.exports = mongoose.model('Quotation', QuotationSchema);