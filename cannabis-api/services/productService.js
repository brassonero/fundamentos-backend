const { products } = require('../models/productModel');

const getAllProducts = () => {
    return products;
};

const getProductById = (id) => {
    return products.find(product => product.id === id);
};

const createProduct = (newProduct) => {
    const product = {
        id: products.length + 1,
        ...newProduct
    };
    products.push(product);
    return product;
};

const updateProduct = (id, updatedProductData) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) return null;

    const updatedProduct = { 
        ...products[productIndex], 
        ...updatedProductData 
    };

    products[productIndex] = updatedProduct;
    return updatedProduct;
};

const deleteProduct = (id) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) return null;

    const [deletedProduct] = products.splice(productIndex, 1);
    return deletedProduct;
};

// ... other product services

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
    // ... other exports
};
