const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    title: { type: String, maxLength: 255 },
    price: { type: Number },
    net_price: { type: Number },
    tax_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tax' },
    image: { type: String, maxLength: 2000 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'menu_items'
});

menuItemSchema.index({ tenant_id: 1 });
menuItemSchema.index({ category: 1, tenant_id: 1 });

// Virtual for id
menuItemSchema.virtual('id').get(function () {
    return this._id.toString();
});

menuItemSchema.set('toJSON', { virtuals: true });
menuItemSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
