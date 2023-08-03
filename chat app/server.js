const express= require('express');
const app=express();
const bodyParser=require('body-parser')


const loginRoutes=require("./routes/login");
const homeRoutes=require('./routes/home');


app.use(bodyParser.urlencoded({extended:false}));
app.use(loginRoutes);
app.use(homeRoutes);









app.listen(3000);