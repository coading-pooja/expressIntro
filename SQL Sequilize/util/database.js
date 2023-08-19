const Sequelize = require('sequelize');

const sequelize=new Sequelize('node-complete', 'root', 'pooja@5106' , {
     dialect:'mysql',
     host:'localhost'
});

module.exports=sequelize;