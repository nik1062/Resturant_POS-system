const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
    title: { type: String, maxLength: 50 },
    rate: { type: Number },
    type: { type: String, enum: ['inclusive', 'exclusive', 'other'], default: 'other' },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'taxes'
});

taxSchema.index({ tenant_id: 1 });

// Virtual for id
taxSchema.virtual('id').get(function () {
    return this._id.toString();
});

taxSchema.set('toJSON', { virtuals: true });
taxSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Tax', taxSchema);
