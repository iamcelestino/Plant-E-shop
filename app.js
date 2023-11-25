const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(adminRouter.routes);
app.use(shopRouter);

app.use((req, res) => {
    res.status(404).render('404');
});


app.listen(3000);