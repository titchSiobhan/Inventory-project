const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const path =require('node:path');
const dbRouter = require('./routes/dbRoute');
const categoryRouter = require('./routes/categoryRouter');
const homeRouter = require('./routes/homeRouter');
const displayRouter = require('./routes/displayCatRouter');
const singleRouter = require('./routes/singleRouter')
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use('/', homeRouter)

app.use('/', singleRouter)
app.use('/shop', dbRouter)
app.use('/category', displayRouter)
app.use('/management', categoryRouter)


app.listen(PORT, console.log('hello'))