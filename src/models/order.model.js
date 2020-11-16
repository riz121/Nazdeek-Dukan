const mongoose = require('mongoose');

/**
 * Schema
 */
const OrderSchema = mongoose.Schema({
    /**
     * specified whether this order was online or not
     */
    orderType: {
        type: String,
        enum: [
            'ONLINE',
            'WALKIN',
        ],
    },
    /**
     * if customer is walkin, I wont have any id here
     */
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    storeId: { type: mongoose.Types.ObjectId, ref: 'Store' },
    products: [{
        product: {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
        },
        quantity: { type: Number },
        purchasedPrice: { type: Number },
    }],
    // amount to charge user
    totalPrice: { type: Number },
    // amount before applying discount, if any
    originalPrice: { type: Number },
    // % of discount given
    discount: { type: Number, min: 0.00, max: 0.99 },
    /**
     * Possible order status
     * PENDING, not accepted yet by merchant
     * DISPATCHED, order on its way
     * REJECTED, merchant rejected order
     * DELIVERED, order delivered successfully
     * NOTE: if this order was walkin, this order will be marked DELIEVERED initially
     * no other possible states for walkin orders
     */
    orderStatus: {
        type: String,
        enum: [
            'PENDING',
            'DISPATCHED',
            'REJECTED',
            'DELIVERED'
        ],
    },
},
    {
        timestamps: true,
    });

/**
 * Export model
 * @typedef OnlineOrder
 */
module.exports = mongoose.model('Order', OrderSchema, 'orders');