const express=require('express');

const routes=express.Router();

const fs=require('fs')

routes.get('/login',(req,res,next)=>{
   
    res.send(`<html>
    <title>Chattapp</title>  
    <h1 style="text-align: center;">ChattApp</h1>
<div class="container" style="margin-left: 100px;">
    <form action="/chat" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
         <label >Login</label><br>
         <input  id="username" type="text" value="username"><br>
         <button type="submit">login</button>
    </form>
</div>
           </html>`)
 
   
})


routes.post('/chat',(req,res,next)=>{
    res.redirect('/')

})




module.exports=routes;