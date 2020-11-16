const mongoose = require('mongoose');

/**
 * Schema
 */
const AdminSchema = mongoose.Schema({
    name: { type: String },
    imageUrl: { type: String },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: { type: String },
    cnic: { type: String, unique: true },
    isSuperAdmin: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef Admin
 */
module.exports = mongoose.model('Admin', AdminSchema, 'admins');