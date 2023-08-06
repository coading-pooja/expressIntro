const { log } = require('console');
const express=require('express')

const route=express.Router();

const path = require('path')

route.get('/contact',(req,res,next)=>{

   res.sendFile(path.join(__dirname,'../','views','contact.html'))
    
    });

    route.post('/success',(req,res,next)=>{
             console.log('Form-Data:' ,req.body);
            
            res.send('<h1>ThankYou!! Details Submitted successfully!</h1>')
    });



module.exports=route;