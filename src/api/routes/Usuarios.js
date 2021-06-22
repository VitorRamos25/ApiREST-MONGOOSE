const express = require('express')
const route = express.Router()
const usuarios = require('../models/usuarios')

route.get('/', async (req, res) => {

    try {

        let usuario = []
        usuario = await usuarios.find()
        res.json(usuario)
        
    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao buscar usuarios"})
    }

})

route.post('/', async (req, res) =>{

    try {

        const usuario = new usuarios(req.body)
        const resultado = await usuario.save()
        res.json(resultado)
        
    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao salvar usuarios"})
    }

})

route.put('/:id', async (req, res) => {

    try {

        const id = req.params.id
        const corpo = req.body
        const resultado = await usuarios.findByIdAndUpdate(id, corpo)
        res.json(resultado)
        
    } catch (error) {
        
        console.error(error.messager)
        res.status(500).json({error: "Erro ao modificar usuarios"})
    }
   

})

route.delete('/:id', async (req, res) => {

    try {
        
        const id = req.params.id
        const resultado = await usuarios.findByIdAndDelete(id)
        res.json(resultado)

    } catch (error) {
        
        console.error(error.messager)
        res.status(500).json({error: "Erro ao deletar usuarios"})
    }
    
    
})



module.exports = route