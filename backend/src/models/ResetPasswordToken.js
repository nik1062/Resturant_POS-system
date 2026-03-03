const mongoose = require('mongoose');

const resetPasswordTokenSchema = new mongoose.Schema({
    username: { type: String, required: true, maxLength: 255 },
    reset_token: { type: String, maxLength: 255 },
    expires_at: { type: Date }
}, {
    timestamps: false,
    collection: 'reset_password_tokens'
});

// Index for username lookup
resetPasswordTokenSchema.index({ username: 1 }, { unique: true });

// Virtual for id
resetPasswordTokenSchema.virtual('id').get(function () {
    return this._id.toString();
});

resetPasswordTokenSchema.set('toJSON', { virtuals: true });
resetPasswordTokenSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('ResetPasswordToken', resetPasswordTokenSchema);
