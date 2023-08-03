const { isUtf8 } = require('buffer');
const express=require('express');

const routes=express.Router();

const fs=require('fs')



routes.get('/',(req,res,next)=>{
    fs.readFile('chatapp.txt',isUtf8,(err,data)=>{
       
        if(err)
        {
            console.log(err);
            data='No chat exists';
        }
       
        res.send(`${data}<html>
        <title>Chattapp</title>
<form  action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
<input type="text" name="message" id="message" placeHolder="message">
<input type="hidden" name="username" id="username">
<button type="submit">Send</button>
</form>
</html>`)

    })
   
    
    
   

    routes.post('/',(req,res,next)=>{
        console.log(req.body.username);
        console.log(req.body.message);

        fs.writeFile('chatapp.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{

         err?  console.log("error"): res.redirect('/');


        
                
        })
       
        
    })



})

module.exports=routes;