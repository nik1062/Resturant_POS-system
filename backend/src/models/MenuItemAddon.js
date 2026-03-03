const mongoose = require('mongoose');

const menuItemAddonSchema = new mongoose.Schema({
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    title: { type: String, required: true, maxLength: 255 },
    price: { type: Number, default: 0 },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'menu_item_addons'
});

menuItemAddonSchema.index({ item_id: 1, tenant_id: 1 });

// Virtual for id
menuItemAddonSchema.virtual('id').get(function () {
    return this._id.toString();
});

menuItemAddonSchema.set('toJSON', { virtuals: true });
menuItemAddonSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('MenuItemAddon', menuItemAddonSchema);
