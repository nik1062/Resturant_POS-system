const mongoose = require('mongoose');

const superadminSchema = new mongoose.Schema({
    email: { type: String, required: true, maxLength: 255 },
    password: { type: String, required: true },
    name: { type: String, maxLength: 255 }
}, {
    timestamps: false,
    collection: 'superadmins'
});

// Index for email lookup
superadminSchema.index({ email: 1 }, { unique: true });

// Virtual for id
superadminSchema.virtual('id').get(function () {
    return this._id.toString();
});

superadminSchema.set('toJSON', { virtuals: true });
superadminSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Superadmin', superadminSchema);
