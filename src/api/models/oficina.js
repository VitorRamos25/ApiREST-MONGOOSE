const mongoose = require('../data/index.js')

let oficinaSchema = new mongoose.Schema({

    _id: Number,
    nome: String,
    professor: String,
    local: Number,
    participantes: Array

})

let oficina = mongoose.model('Oficina', oficinaSchema)

module.exports = oficina