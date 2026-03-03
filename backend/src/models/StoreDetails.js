const mongoose = require('mongoose');

const storeDetailsSchema = new mongoose.Schema({
    store_name: { type: String, maxLength: 255 },
    address: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 20 },
    email: { type: String, maxLength: 255 },
    currency: { type: String, maxLength: 10 },
    store_image: { type: String, maxLength: 2000 },
    unique_id: { type: String },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
    is_qr_menu_enabled: { type: Boolean, default: false },
    unique_qr_code: { type: String },
    is_qr_order_enabled: { type: Boolean, default: false },
    is_feedback_enabled: { type: Boolean, default: false }
}, {
    timestamps: false,
    collection: 'store_details'
});

// Index for tenant lookup
storeDetailsSchema.index({ tenant_id: 1 }, { unique: true });

// Virtual for id
storeDetailsSchema.virtual('id').get(function () {
    return this._id.toString();
});

storeDetailsSchema.set('toJSON', { virtuals: true });
storeDetailsSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('StoreDetails', storeDetailsSchema);
