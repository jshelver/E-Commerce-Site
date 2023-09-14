import { Router } from 'express';
import User from '../../models/User';
import Product from '../../models/Product';

const router = Router()

router.get('/:userId/cart', async (req, res) => {
    // Get user id
    const { userId } = req.params;
    try {
        // Find user in database
        const user = await User.findOne({ userId: userId});
        if (!user) throw new Error('No User found');
        res.status(200).json({ cartItems: user.cartItems });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/:userId/cart', async (req, res) => {
    // Get user and product ids
    const { userId } = req.params;
    const { productId } = req.body;
    try {
        // Find user and product in database
        const user = await User.findOne({ userId: userId });
        const product = await Product.findOne({ id: productId });

        if (!user) throw new Error('No User found');
        if (!product) throw new Error('No Product found');

        // Add product to user's cart and save it
        user.cartItems.push(parseInt(product.id));
        await user.save();
        res.status(200).json({ cartItems: user.cartItems });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:userId/cart/:productId', async (req, res) => {
    // Get user and product ids
    const { userId } = req.params;
    const { productId } = req.params;
    try {
        // Find user in database
        const user = await User.findOne({ userId: userId });

        if (!user) throw new Error('No User found');

        // Remove product from user's cart (only one even if there are multiple)
        for (let i = 0; i < user.cartItems.length; i++) {
            if (user.cartItems[i] === parseInt(productId)) {
                user.cartItems.splice(i, 1);
                break;
            }
        }
        await user.save();
        res.status(200).json({ cartItems: user.cartItems });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router