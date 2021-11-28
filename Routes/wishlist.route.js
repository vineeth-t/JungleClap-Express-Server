const express =require('express')

const router =express.Router();

const bodyParser=require('body-parser')

let {wishList}=require('../database')

router.use(bodyParser.json())
router.route('/')
.get((req,res)=>{
  res.json({response:wishList})
})
.post((req,res)=>{
    const body=req.body;
    wishList=[...wishList,body];
    res.json({response:wishList})

})
router.route("/:id")
.delete((req,res)=>{
  const{id}=req.params
  wishList=[...wishList.filter((wish)=>wish.id!==id)]
  res.json({response:wishList})
})

module.exports=router