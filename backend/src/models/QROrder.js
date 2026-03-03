const mongoose = require('mongoose');

const qrOrderSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    delivery_type: { type: String, maxLength: 90 },
    customer_type: { type: String, enum: ['WALKIN', 'CUSTOMER'], default: 'WALKIN' },
    customer_id: { type: String },
    table_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StoreTable' },
    status: { type: String, enum: ['created', 'completed', 'cancelled'], default: 'created' },
    payment_status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'qr_orders'
});

qrOrderSchema.index({ tenant_id: 1 });
qrOrderSchema.index({ status: 1, tenant_id: 1 });

// Virtual for id
qrOrderSchema.virtual('id').get(function () {
    return this._id.toString();
});

qrOrderSchema.set('toJSON', { virtuals: true });
qrOrderSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('QROrder', qrOrderSchema);
