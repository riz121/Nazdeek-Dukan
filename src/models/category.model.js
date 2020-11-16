const mongoose = require('mongoose');

/**
 * Schema
 */
const CategorySchema = mongoose.Schema({
    name: { type: String, unique: true },
    description: { type: String },
    imageUrl: { type: String },
    isDisabled: { type: Boolean, default: false },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'Admin' }
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef Category
 */
module.exports = mongoose.model('Category', CategorySchema, 'categories');