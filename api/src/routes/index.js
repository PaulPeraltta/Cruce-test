const { Router } = require('express');
const productRoutes = require("./product");

const router = Router();

router.use('/products', productRoutes);


module.exports = router;
