const express = require('express');
const app = express();
const port = 3000;
const cors =require('cors')

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
app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));
