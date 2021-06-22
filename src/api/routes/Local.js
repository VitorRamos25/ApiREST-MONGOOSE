const express = require('express')
const route = express.Router()
const local = require('../models/local')

route.get('/', async (req, res) => {

    try {

        let lugar = []
        lugar = await local.find()
        res.json(lugar)
        
    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao buscar local"})
    }

})

route.post('/', async (req, res) =>{

    try {

        const lugar = new local(req.body)
        const resultado = await lugar.save()
        res.json(resultado)
        
    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao salvar local"})
    }

})

route.put('/:id', async (req, res) => {

    try {

        const id = req.params.id
        const corpo = req.body
        const resultado = await local.findByIdAndUpdate(id, corpo)
        res.json(resultado)
        
    } catch (error) {
        
        console.error(error.messager)
        res.status(500).json({error: "Erro ao modificar local"})
    }
   

})

route.delete('/:id', async (req, res) => {

    try {
        
        const id = req.params.id
        const resultado = await local.findByIdAndDelete(id)
        res.json(resultado)

    } catch (error) {
        
        console.error(error.messager)
        res.status(500).json({error: "Erro ao deletar local"})
    }
    
    
})



module.exports = route