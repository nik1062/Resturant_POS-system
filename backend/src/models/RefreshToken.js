const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema({
    username: { type: String, required: true, maxLength: 255 },
    refresh_token: { type: String, required: true, maxLength: 500 },
    device_ip: { type: String, maxLength: 50 },
    device_name: { type: String, maxLength: 255 },
    device_location: { type: String, maxLength: 255 },
    created_at: { type: Date, default: Date.now },
    expiry: { type: Date },
    device_id: { type: Number, auto: true },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, { 
    timestamps: false,
    collection: 'refresh_tokens'
});

refreshTokenSchema.index({ username: 1, refresh_token: 1 });
refreshTokenSchema.index({ tenant_id: 1 });

// Virtual for id
refreshTokenSchema.virtual('id').get(function() {
    return this._id.toString();
});

refreshTokenSchema.set('toJSON', { virtuals: true });
refreshTokenSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('RefreshToken', refreshTokenSchema);
