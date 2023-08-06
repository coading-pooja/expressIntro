const { log } = require('console');
const express=require('express')

const route=express.Router();

const path = require('path')

route.get('/addproduct',(req,res,next)=>{

   res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
    
    });

    route.post('/addproduct',(req,res,next)=>{
             console.log('Form-Data:' ,req.body);
            
            res.send('<h1>Product Submitted!</h1>')
    });



module.exports=route;