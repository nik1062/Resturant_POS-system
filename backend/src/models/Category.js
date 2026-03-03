const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: { type: String, maxLength: 100 },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'categories'
});

categorySchema.index({ tenant_id: 1 });

// Virtual for id
categorySchema.virtual('id').get(function () {
    return this._id.toString();
});

categorySchema.set('toJSON', { virtuals: true });
categorySchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Category', categorySchema);
