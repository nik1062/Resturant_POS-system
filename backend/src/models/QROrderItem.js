const mongoose = require('mongoose');

const qrOrderItemSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'QROrder' },
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    variant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItemVariant' },
    price: { type: Number },
    quantity: { type: Number },
    status: {
        type: String,
        enum: ['created', 'preparing', 'completed', 'cancelled', 'delivered'],
        default: 'created'
    },
    date: { type: Date, default: Date.now },
    notes: { type: String, maxLength: 255 },
    addons: { type: mongoose.Schema.Types.Mixed },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'qr_order_items'
});

qrOrderItemSchema.index({ tenant_id: 1 });
qrOrderItemSchema.index({ order_id: 1, tenant_id: 1 });

// Virtual for id
qrOrderItemSchema.virtual('id').get(function () {
    return this._id.toString();
});

qrOrderItemSchema.set('toJSON', { virtuals: true });
qrOrderItemSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('QROrderItem', qrOrderItemSchema);
