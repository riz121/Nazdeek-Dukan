const mongoose = require('mongoose');
const AddressSchema = require('./address.schema');

/**
 * Schema
 */
const UserSchema = mongoose.Schema({
    name: { type: String },
  //  imageUrl: { type: String },
    email: { type: String, unique: true },
    phone: { type: Number, unique: true },
    password: { type: String },
    address: AddressSchema,
    isDisabled: { type: Boolean, default: false },
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef User
 */
module.exports = mongoose.model('User', UserSchema, 'users');