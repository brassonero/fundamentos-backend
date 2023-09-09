const express = require('express');
const productRoutes = require('./routes/products');
const { PORT } = require('./config');

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
