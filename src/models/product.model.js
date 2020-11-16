const mongoose = require('mongoose');

/**
 * Schema
 */
const ProductSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    category: { type: mongoose.Types.ObjectId, ref: 'Category' },
    store: { type: mongoose.Types.ObjectId, ref: 'Store' },
    merchant: { type: mongoose.Types.ObjectId, ref: 'Merchant' },
    isDisabled: { type: Boolean, default: false },
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef Product
 */
module.exports = mongoose.model('Product', ProductSchema, 'products');