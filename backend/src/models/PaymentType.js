const mongoose = require('mongoose');

const paymentTypeSchema = new mongoose.Schema({
    title: { type: String, maxLength: 255 },
    is_active: { type: Boolean },
    icon: { type: String, maxLength: 255 },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'payment_types'
});

paymentTypeSchema.index({ tenant_id: 1 });

// Virtual for id
paymentTypeSchema.virtual('id').get(function () {
    return this._id.toString();
});

paymentTypeSchema.set('toJSON', { virtuals: true });
paymentTypeSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('PaymentType', paymentTypeSchema);
