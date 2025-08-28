const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  kycDocs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quotations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quotation' }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
}, { timestamps: true });

module.exports = mongoose.model('Vendor', VendorSchema);