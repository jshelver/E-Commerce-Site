import { Router } from 'express';
import Product from '../../models/Product';

const router = Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const productList = await Product.find();
        if (!productList) throw new Error('No Product List found');
        res.status(200).json(productList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get product by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.find({ id: id });
        if (!product) throw new Error('No Product found');
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add product
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const product = await newProduct.save();
        if (!product) throw new Error('Something went wrong saving the Product');
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a list of products
router.post('/list', async (req, res) => {
    const newProducts = req.body;
    try {
        const products = await Product.insertMany(newProducts);
        if (!products) throw new Error('Something went wrong saving the Product');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const removed = await Product.deleteMany({ id: id });
        if (!removed) throw Error('Something went wrong ');
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router