const express=require('express');
const app=express();

const path=require('path')
const bodyParser=require('body-parser');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact')
const errorController=require('./controller/error')


app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(contactRoutes);


app.use(errorController.geterror);

app.listen(3000)