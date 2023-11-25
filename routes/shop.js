const express = require('express');
const path = require('path');

const router = express.Router();
const adminData = require('./admin');


router.get('/', (req, res) => {
    const products = adminData.products;
    res.render('index', { 
        prods: products,
        pageTitle: 'shop'
    });
});

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