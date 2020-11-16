const mongoose = require('mongoose');

/**
 * Schema
 */
const MerchantSchema = mongoose.Schema({
    name: { type: String },
    imageUrl: { type: String },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: { type: String },
    cnic: { type: String, unique: true },
    isDisabled: { type: Boolean, default: false },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'Admin' }
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef Merchant
 */
module.exports = mongoose.model('Merchant', MerchantSchema, 'merchants');