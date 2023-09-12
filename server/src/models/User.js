import{ Schema, model } from 'mongoose';

const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    cartItems: {
        type: Array,
        required: true,
    }
});

const user = model('user', UserSchema, 'test');

module.exports = user;