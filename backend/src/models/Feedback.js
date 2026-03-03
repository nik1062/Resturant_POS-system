const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    invoice_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
    phone: { type: String, maxLength: 20 },
    date: { type: Date, default: Date.now },
    created_by: { type: String, maxLength: 255 },
    average_rating: { type: Number },
    food_quality_rating: { type: Number },
    service_rating: { type: Number },
    staff_behavior_rating: { type: Number },
    ambiance_rating: { type: Number },
    recommend_rating: { type: Number },
    remarks: { type: mongoose.Schema.Types.Mixed },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'feedbacks'
});

feedbackSchema.index({ tenant_id: 1 });
feedbackSchema.index({ invoice_id: 1, tenant_id: 1 });

// Virtual for id
feedbackSchema.virtual('id').get(function () {
    return this._id.toString();
});

feedbackSchema.set('toJSON', { virtuals: true });
feedbackSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
