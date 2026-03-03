const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
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
    addons: { type: mongoose.Schema.Types.Mixed }, // Store as JSON string or array
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'order_items'
});

orderItemSchema.index({ tenant_id: 1 });
orderItemSchema.index({ order_id: 1, tenant_id: 1 });

// Virtual for id
orderItemSchema.virtual('id').get(function () {
    return this._id.toString();
});

orderItemSchema.set('toJSON', { virtuals: true });
orderItemSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('OrderItem', orderItemSchema);
