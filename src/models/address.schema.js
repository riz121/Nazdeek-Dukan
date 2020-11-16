const mongoose = require('mongoose');
const GeoPointSchema = require('./geoPoint.schema');

/**
 * Schema
 */
const AddressSchema = mongoose.Schema({
    street: { type: String },
    area: { type: String },
    city: { type: String },
    country: { type: String },
    geoPoint: { type: GeoPointSchema }
});

/**
 * Export schema
 */
module.exports = AddressSchema;