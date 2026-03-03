const mongoose = require('mongoose');

const menuItemVariantSchema = new mongoose.Schema({
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    title: { type: String, required: true, maxLength: 255 },
    price: { type: Number, default: 0 },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'menu_item_variants'
});

menuItemVariantSchema.index({ item_id: 1, tenant_id: 1 });

// Virtual for id
menuItemVariantSchema.virtual('id').get(function () {
    return this._id.toString();
});

menuItemVariantSchema.set('toJSON', { virtuals: true });
menuItemVariantSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('MenuItemVariant', menuItemVariantSchema);
