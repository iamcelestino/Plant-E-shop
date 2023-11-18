const express = require('express');
const path = require('path');



const router = express.Router()


router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
})


module.exports = router;