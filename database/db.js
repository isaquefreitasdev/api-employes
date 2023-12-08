const Sequelize = require('sequelize')
require("dotenv").config();

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT
});
const User = sequelize.define('Usuario',{
    id:{
        allowNull:false,
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING
    },
    cargo:{
        allowNull:false,
        type:Sequelize.STRING
    },
    cpf:{
        allowNull:false,
        type:Sequelize.BIGINT,
        unique:true
    }
    


})
// User.sync()
// User.create({
//     name:"Isaque",
//     cargo:'aprendiz',
//     cpf:959484849602,

// }) 
// User.sync()





module.exports = {sequelize,User}