const express = require('express');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../services/productService');

const router = express.Router();

router.get('/', (req, res) => {
    const products = getAllProducts();
    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = getProductById(Number(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send({ message: "Product not found." });
    }
});

// POST
router.post('/', (req, res) => {
    const product = createProduct(req.body);
    res.status(201).json(product);
});

// PUT
router.put('/:id', (req, res) => {
    const updatedProduct = updateProduct(Number(req.params.id), req.body);
    if (!updatedProduct) return res.status(404).send('Product not found');
    
    res.json(updatedProduct);
});

// DELETE
router.delete('/:id', (req, res) => {
    const deletedProduct = deleteProduct(Number(req.params.id));
    if (!deletedProduct) return res.status(404).send('Product not found');
    
    res.json(deletedProduct);
});

module.exports = router;
