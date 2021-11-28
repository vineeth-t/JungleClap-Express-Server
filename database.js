const faker = require('faker');
const { v4: uuid } = require("uuid");
let products=[];
let cart=[];
let wishList=[]
for(let i=0;i<50;i++){
          id= faker.datatype.uuid()
          name= faker.commerce.productName()
          image= faker.random.image(),
          price= faker.commerce.price(),
          inStock=faker.datatype.boolean(),
          fastDelivery= faker.datatype.boolean(),
          quantity=1
    product={id,name,image,price,inStock,fastDelivery,quantity}
    products=[...products,product]
  };
module.exports={products,cart,wishList}
