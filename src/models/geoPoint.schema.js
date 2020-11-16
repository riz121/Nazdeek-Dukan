const mongoose = require('mongoose');

/**
 * Schema
 */
const GeoPointSchema = mongoose.Schema({
    type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    }
});

/**
 * export schema
 */
module.exports = GeoPointSchema;