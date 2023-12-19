const express = require('express');
const path = require('path');

const router = express.Router();

const adminController = require('../controllers/admin');
router.get('/admin',adminController.getAddProductPage);
router.post('/admin', adminController.postProduct);

module.exports = router;
