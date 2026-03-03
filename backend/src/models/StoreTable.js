const mongoose = require('mongoose');

const storeTableSchema = new mongoose.Schema({
    table_title: { type: String, maxLength: 100 },
    floor: { type: String, maxLength: 50 },
    seating_capacity: { type: Number },
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, {
    timestamps: false,
    collection: 'store_tables'
});

storeTableSchema.index({ tenant_id: 1 });

// Virtual for id
storeTableSchema.virtual('id').get(function () {
    return this._id.toString();
});

storeTableSchema.set('toJSON', { virtuals: true });
storeTableSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('StoreTable', storeTableSchema);
