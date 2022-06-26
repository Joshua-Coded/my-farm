const express = require('express');
const  mongoose  = require('mongoose');
const app = express();
const path = require('path');

//model schema
const Product = require('./models/product');

//my database connection
mongoose.connect('mongodb://localhost:27017/myalx', {useNewUrlParser: true})
.then(() => {
    console.log("CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})



// my views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// my routes
app.get('/products', async(req, res) => {
const products = await Product.find({})
    res.render('products/index', { products });
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})