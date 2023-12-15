

const products = [];

exports.getProduct =  (req, res) => {
    res.render('index', { 
        prods: products,
        pageTitle: 'shop'
    });
}

exports.postProduct = (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
}