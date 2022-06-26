const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/myalx', {useNewUrlParser: true})
.then(() => {
    console.log("CONNECTION OPEN!")
})
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})

// const p = new Product ({
//     name: 'Cassava',
//     price: 129,
//      category: 'fruit'

// })
// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Curry',
        price: 3.4,
        category: 'vegetable'
    },
    {
        name: 'Water Melon',
        price: 12.4,
        category: 'fruit'
    },
    {
        name: 'Apples',
        price: 14.5,
        catergory: 'fruit'
    },
    {
        name: 'Avocado',
        price: 76.4,
        category: 'fruit'
    },
    {
        name: 'Damson',
        price: 123.4,
        category: 'fruit'
    },
    {
        name: 'potato',
        price: 564.6,
        category: 'vegetable'
    },
    {
        name: 'Brinjal',
        price: 6753.6,
        category: 'vegetable'
    }
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})