const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, maxLength: 255 },
    password: { type: String, required: true },
    name: { type: String, maxLength: 95 },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    photo: { type: String, maxLength: 2000 },
    designation: { type: String, maxLength: 50 },
    phone: { type: String, maxLength: 20 },
    email: { type: String, maxLength: 255 },
    scope: { type: String, maxLength: 2000 },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'users'
});

// Index for efficient queries
userSchema.index({ username: 1, tenant_id: 1 });
userSchema.index({ tenant_id: 1 });

// Virtual for id
userSchema.virtual('id').get(function () {
    return this._id.toString();
});

userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
