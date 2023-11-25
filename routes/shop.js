const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..',  'views', 'index.html'));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'))
});

router.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'categories.html'));
});


module.exports = router;