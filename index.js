const express = require('express');
const app = express();
const cors =require('cors')
//After setting up database use this 
const products=require('./Routes/products.route.js')

const wishlist=require('./Routes/wishlist.route.js')

const cart=require('./Routes/cart.route.js');

app.use(cors())
app.use("/products",products)

app.use("/wishlist",wishlist)

app.use('/cart',cart)

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
