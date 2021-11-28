const express= require('express')

const {products}=require('../database')
const router=express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json())
router.route('/')
.get((req,res)=>{
  res.json({products,success:true})
})

module.exports=router