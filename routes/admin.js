const express = require('express');
const path = require('path');

const router = express.Router();


const products = [];
router.get('/admin', (req, res) => {
    res.render('product', {pageTitle: 'admin'});
});

router.post('/admin',  (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
