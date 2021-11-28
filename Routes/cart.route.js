const express=require('express'); 

const router=express.Router();

let {cart}=require('../database')

const bodyParser=require('body-parser');


router.use(bodyParser.json())

router.route('/')

.get((req,res)=>{
  res.json({response:cart})
})

.post((req,res)=>{
  const itemToBeAdded=req.body
  cart=[...cart,itemToBeAdded]
  res.json({response:cart})
})

router.route('/:id')
.post((req,res)=>{
  const{id}=req.params
  const {flag}=req.body;
  console.log(flag)
  if(flag==='INC'){
    cart=[...cart.map((cartItem)=>cartItem.id===id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)]
      console.log(cart)
  }else if(flag==='DEC'){
          if(cart.some((item)=>item.quantity<=1)){
            cart=cart.filter((item)=>item.id!==id)
          }
          else{
            cart=[...cart.map((cartItem)=>cartItem.id===id?{...cartItem,quantity:cartItem.quantity-1}:cartItem)]
            }
  
  }

res.json({response:cart})
})
.delete((req,res)=>{
  const {id}=req.params;
  cart=[...cart.filter((cartItem)=>cartItem.id!==id)]
  res.json({response:cart})
})
module.exports=router
