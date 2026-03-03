const mongoose = require('mongoose');

const invoiceSequenceSchema = new mongoose.Schema({
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    sequence_no: { type: Number }
}, {
    timestamps: false,
    collection: 'invoice_sequences'
});

// Index for tenant lookup
invoiceSequenceSchema.index({ tenant_id: 1 }, { unique: true });

// Virtual for id
invoiceSequenceSchema.virtual('id').get(function () {
    return this._id.toString();
});

invoiceSequenceSchema.set('toJSON', { virtuals: true });
invoiceSequenceSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('InvoiceSequence', invoiceSequenceSchema);
