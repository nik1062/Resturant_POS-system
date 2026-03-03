const mongoose = require('mongoose');

const printSettingsSchema = new mongoose.Schema({
    tenant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    page_format: { type: String, maxLength: 5 },
    header: { type: String, maxLength: 2000 },
    footer: { type: String, maxLength: 2000 },
    show_notes: { type: Boolean },
    is_enable_print: { type: Boolean },
    show_store_details: { type: Boolean },
    show_customer_details: { type: Boolean },
    print_token: { type: Boolean }
}, {
    timestamps: false,
    collection: 'print_settings'
});

// Index for tenant lookup
printSettingsSchema.index({ tenant_id: 1 }, { unique: true });

// Virtual for id
printSettingsSchema.virtual('id').get(function () {
    return this._id.toString();
});

printSettingsSchema.set('toJSON', { virtuals: true });
printSettingsSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('PrintSettings', printSettingsSchema);
