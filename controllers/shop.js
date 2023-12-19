const Product = require('../model/product');

exports.getProduct =  (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop/index', { 
        prods: products,
        pageTitle: 'shop'
    });
};

exports.getContactPage = (req, res, next) => {
    res.render('shop/contact', {
        pageTitle: 'Contact'
    });
};

exports.getCategoriesPage = (req, res, next ) => {
    res.render('shop/categories',  
    {pageTitle: 'categoroies'});
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', 
    {pageTitle: 'Your cart'});
}