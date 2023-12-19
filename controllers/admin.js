const Product = require('../model/product');

exports.getAddProductPage =(req, res) => {
    res.render('admin/product', 
    {pageTitle: 'admin'});
};


exports.postProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};













