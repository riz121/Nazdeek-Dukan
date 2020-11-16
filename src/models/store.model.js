const mongoose = require('mongoose');
const AddressSchema = require('./address.schema');
var d = new Date();
/**
 * Schema
 */
const StoreSchema = mongoose.Schema({
    name: { type: String },
    /**
     * Possible values
     * GENERAL
     * WHOLESALE
     */
    type: {
        type: String,
        enum: [
            'GENERAL',
            'WHOLESALE',
        ],
    },
    imageUrl: { type: String },
    openTime: { type: Date},
    closeTime: { type: Date},
    lunchTime: { type: Date},
    /**
     * My system assumes that week starts from Monday
     * e.g Monday = 1, Tuesday = 2 and so on
     */
    daysClosed: [{
        type: Number,
        min: 1,
        max: 7,
    }],
    address: AddressSchema,
    merchant: { type: mongoose.Types.ObjectId, ref: 'Merchant' },
    isDisabled: { type: Boolean, default: false },
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef Store
 */
module.exports = mongoose.model('Store', StoreSchema, 'stores');