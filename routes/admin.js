const express = require('express');
const path = require('path');

const router = express.Router();

const productController = require('../controllers/product')

router.get('/admin', (req, res) => {
    res.render('product', {pageTitle: 'admin'});
});

router.post('/admin', productController.postProduct);

module.exports = router;
