const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const errorController = require('./controllers/404');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(adminRouter);
app.use(shopRouter);

app.use(errorController.getPageNotFound);


app.listen(3000);