const mongoose = require('mongoose');

/**
 * Schema
 */
const RatingSchema = mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    comments: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    merchant: { type: mongoose.Types.ObjectId, ref: 'Merchant' },
    store: { type: mongoose.Types.ObjectId, ref: 'Store' },
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef Rating
 */
module.exports = mongoose.model('Rating', RatingSchema, 'ratings');