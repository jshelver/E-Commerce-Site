import{ Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    averageRating: {
        type: String,
        required: true,
    }
});

const product = model('product', ProductSchema);

module.exports = product;