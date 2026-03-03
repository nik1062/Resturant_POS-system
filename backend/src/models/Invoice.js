const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    sub_total: { type: Number },
    tax_total: { type: Number },
    total: { type: Number },
    payment_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentType' },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true }
}, {
    timestamps: false,
    collection: 'invoices'
});

// Compound index for id + tenant_id (mimicking MySQL composite PK)
invoiceSchema.index({ _id: 1, tenant_id: 1 });
invoiceSchema.index({ tenant_id: 1 });
invoiceSchema.index({ created_at: -1, tenant_id: 1 });

// Virtual for id
invoiceSchema.virtual('id').get(function () {
    return this._id.toString();
});

invoiceSchema.set('toJSON', { virtuals: true });
invoiceSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
