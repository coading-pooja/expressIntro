const express=require('express')

const rootDir=require('../utils/path')

const route=express.Router();

const path = require('path')

const adminController=require('../controller/product')

route.get('/addproduct',adminController.getProduct);
route.post('/addproduct',adminController.postProduct);



module.exports=route;