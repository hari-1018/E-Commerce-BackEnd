const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    products: [{   
        productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
        },
        quantity: {
        type: Number,
        required: true,
        default: 1,
        },
        price: {
            type: Number,
        },
        totalPrice: {
        type: Number,
        required: true,
        },
        }],
});


module.exports = mongoose.model('carts', cartModel);