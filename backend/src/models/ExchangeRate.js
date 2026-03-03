const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
    currency_code: { type: String, required: true, maxLength: 5 },
    rate_to_usd: { type: Number }
}, {
    timestamps: false,
    collection: 'exchange_rates'
});

// Index for currency lookup
exchangeRateSchema.index({ currency_code: 1 }, { unique: true });

// Virtual for id
exchangeRateSchema.virtual('id').get(function () {
    return this._id.toString();
});

exchangeRateSchema.set('toJSON', { virtuals: true });
exchangeRateSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('ExchangeRate', exchangeRateSchema);
