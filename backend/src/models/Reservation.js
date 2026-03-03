const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    customer_id: { type: String },
    date: { type: Date },
    table_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StoreTable' },
    status: { type: String, maxLength: 100 },
    notes: { type: String, maxLength: 500 },
    people_count: { type: Number },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    unique_code: { type: String, maxLength: 20 },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'reservations'
});

reservationSchema.index({ tenant_id: 1 });
reservationSchema.index({ unique_code: 1 }, { unique: true });
reservationSchema.index({ date: 1 });
reservationSchema.index({ customer_id: 1, tenant_id: 1 });

// Virtual for id
reservationSchema.virtual('id').get(function () {
    return this._id.toString();
});

reservationSchema.set('toJSON', { virtuals: true });
reservationSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Reservation', reservationSchema);
