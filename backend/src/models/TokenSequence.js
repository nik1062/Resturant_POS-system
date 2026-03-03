const mongoose = require('mongoose');

const tokenSequenceSchema = new mongoose.Schema({
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    sequence_no: { type: Number },
    last_updated: { type: Date }
}, {
    timestamps: false,
    collection: 'token_sequences'
});

// Index for tenant lookup
tokenSequenceSchema.index({ tenant_id: 1 }, { unique: true });

// Virtual for id
tokenSequenceSchema.virtual('id').get(function () {
    return this._id.toString();
});

tokenSequenceSchema.set('toJSON', { virtuals: true });
tokenSequenceSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('TokenSequence', tokenSequenceSchema);
