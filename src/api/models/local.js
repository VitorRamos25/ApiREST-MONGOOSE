const mongoose = require('../data/index.js')

let localSchema = new mongoose.Schema({

    _id: Number,
    nome: String,
    capacidade: Number

})

let local = mongoose.model('Local', localSchema)

module.exports = local