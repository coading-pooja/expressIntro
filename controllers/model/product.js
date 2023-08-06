const fs =require('fs');
const path=require('path')
const rootDir=require('../utils/path');
const p =path.join(rootDir,'data','products.json');

const getProductFromFile=cb=>{

    fs.readFile(p,(err,filecontent)=>{
        if(err)
        {
            cb([]);
        }
        else{
        
            cb(JSON.parse(filecontent))
        }
        
        
    })

};

module.exports=class Product
{

constructor(t,s)
{
    this.title=t;
    this.size=s;
}
save()
{
    this.id=Math.random().toString();
    getProductFromFile(products=>{  
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
              console.log(err)
       });
        
    });
 
     

}

static fetchAll(cb)
{
    getProductFromFile(cb);   


}


}