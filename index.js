const express = require('express');
const app = express();
const database = require("./database/db")
const Sequelize = require('sequelize');
const { error } = require('console');

app.use(express.json())

// const User = database.define({
//     id:{
//         allownull:false,
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         primaryKey:true
//     },
//     name:{
//         allownull:false,
//         type:Sequelize.STRING
//     },
//     cargo:{
//         allownull:false,
//         type:Sequelize.STRING
//     },
//     cpf:{
//         allownull:false,
//         type:Sequelize.INTEGER,
//         unique:true
//     }



// })
app.get('/users', async (req, res) => {
    const users = await database.User.findAll();
    res.json({ users })

})
app.post('/create', async (req, res) => {
    try {
        const newUser = await database.User.create({
            name: req.body.name,
            cargo: req.body.cargo,
            cpf: req.body.cpf
        })
        res.status(201).json({ status: 201, msg: "Criado com Sucesso" })

    } catch (error) {
        res.status(401).json({ status: 401, msg: error })
    }


})
app.delete('/remove/:id', async (req, res) => {
    try {
        const removeUser = await database.User.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.status(201).json({ status: 201, msg: "Excluido com sucesso" })

    } catch (error) {


        res.status(401).json({ status: 401, msg: error })
    }
})
app.put('/update/:id', async (req, res) => {
    try {
        const updateUser = await database.User.update({name:req.body.name,cargo:req.body.cargo,cpf:req.body.cpf},{
            where: {
                id: req.params.id,
            }
        })
        res.status(201).json({ status: 201, msg: "Atualizado com sucesso" })

    } catch (error) {


        res.status(401).json({ status: 401, msg: error })
    }
})
app.listen(3000, console.log('rodando'))
