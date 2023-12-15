const express = require('express');
const path = require('path');
const router = express.Router();

const productController = require('../controllers/product');

router.get('/', productController.getProduct);

router.get("/contact", (req, res) => {
    res.render('contact', {
        pageTitle: 'Contact'
    });
});

router.get('/categories', (req, res) => {
    res.render('categories',  {
        pageTitle: 'categories'
    });
});


module.exports = router;