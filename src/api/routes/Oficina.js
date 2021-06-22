const express = require('express')
const route = express.Router()
const oficina = require('../models/oficina')





route.get('/', async (req, res) => {

    try {

        let cursos = []
        cursos = await oficina.find()
        res.json(cursos)
        
    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao buscar oficina"})
    }

})

route.post('/', async (req, res) =>{

    try {

        const curso = new oficina(req.body)
        const resultado = await curso.save()
        res.json(resultado)
        
    } catch (error) {

        console.error(error.messager)
        res.status(500).json({error: "Erro ao salvar oficina"})
    }

})

route.put('/:id', async (req, res) => {

    try {

        const id = req.params.id
        const corpo = req.body
        const resultado = await oficina.findByIdAndUpdate(id, corpo)
        res.json(resultado)
        
    } catch (error) {
        
        console.error(error.messager)
        res.status(500).json({error: "Erro ao modificar oficina"})
    }
   

})

route.delete('/:id', async (req, res) => {

    try {
        
        const id = req.params.id
        const resultado = await oficina.findByIdAndDelete(id)
        res.json(resultado)

    } catch (error) {
        
        console.error(error.messager)
        res.status(500).json({error: "Erro ao deletar oficina"})
    }
    
    
})



module.exports = route