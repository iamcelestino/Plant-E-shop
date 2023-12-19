const express = require('express');
const path = require('path');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getProduct);

router.get("/contact", shopController.getContactPage);

router.get('/categories', shopController.getCategoriesPage);
router.get('/cart', shopController.getCart);

module.exports = router;