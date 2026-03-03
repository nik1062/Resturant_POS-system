const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    delivery_type: { type: String, maxLength: 90 },
    customer_type: { type: String, enum: ['WALKIN', 'CUSTOMER'], default: 'WALKIN' },
    customer_id: { type: String },
    table_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StoreTable' },
    status: { type: String, enum: ['created', 'completed', 'cancelled'], default: 'created' },
    token_no: { type: Number },
    payment_status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    invoice_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'orders'
});

orderSchema.index({ tenant_id: 1 });
orderSchema.index({ status: 1, tenant_id: 1 });
orderSchema.index({ date: -1, tenant_id: 1 });

// Virtual for id
orderSchema.virtual('id').get(function () {
    return this._id.toString();
});

orderSchema.set('toJSON', { virtuals: true });
orderSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Order', orderSchema);
