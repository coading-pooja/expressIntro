const { log } = require('console');
const express=require('express')
const rootDir=require('../utils/path')

const route=express.Router();

const path = require('path')

const contactController=require('../controller/product')

route.get('/contact',contactController.getContactus);

    route.post('/success',contactController.postContactus);



module.exports=route;