const rootDir=require('../utils/path');
const path=require('path');


exports.geterror=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
}