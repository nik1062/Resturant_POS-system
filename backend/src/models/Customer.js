const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    phone: { type: String, required: true, maxLength: 20 },
    name: { type: String, required: true },
    email: { type: String, maxLength: 255 },
    birth_date: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    is_member: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true }
}, {
    timestamps: false,
    collection: 'customers'
});

// Compound index for phone + tenant_id
customerSchema.index({ phone: 1, tenant_id: 1 }, { unique: true });
customerSchema.index({ tenant_id: 1 });

// Virtual for id
customerSchema.virtual('id').get(function () {
    return this._id.toString();
});

customerSchema.set('toJSON', { virtuals: true });
customerSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Customer', customerSchema);
