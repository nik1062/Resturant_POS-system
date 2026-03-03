const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    name: { type: String, maxLength: 95 },
    is_active: { type: Boolean, default: true },
    subscription_id: { type: String },
    payment_customer_id: { type: String },
    subscription_start: { type: Date },
    subscription_end: { type: Date },
    created_at: { type: Date, default: Date.now }
}, {
    timestamps: false,
    collection: 'tenants'
});

// Virtual for id
tenantSchema.virtual('id').get(function () {
    return this._id.toString();
});

// Ensure virtuals are serialized
tenantSchema.set('toJSON', { virtuals: true });
tenantSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Tenant', tenantSchema);
