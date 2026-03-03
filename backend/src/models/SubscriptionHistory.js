const mongoose = require('mongoose');

const subscriptionHistorySchema = new mongoose.Schema({
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
    created_at: { type: Date, default: Date.now },
    starts_on: { type: Date },
    expires_on: { type: Date },
    status: { type: String, enum: ['updated', 'created', 'cancelled'] }
}, {
    timestamps: false,
    collection: 'subscription_history'
});

subscriptionHistorySchema.index({ tenant_id: 1 });

// Virtual for id
subscriptionHistorySchema.virtual('id').get(function () {
    return this._id.toString();
});

subscriptionHistorySchema.set('toJSON', { virtuals: true });
subscriptionHistorySchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('SubscriptionHistory', subscriptionHistorySchema);
