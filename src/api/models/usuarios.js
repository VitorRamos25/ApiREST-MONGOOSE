const mongoose = require('../data/index.js')

let usuarioSchema = new mongoose.Schema({

    _id: Number,
    nome: String
})

let usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = usuario