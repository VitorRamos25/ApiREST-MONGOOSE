const express = require('express')
const app = express()
const Oficina = require('./src/api/routes/Oficina')
const Usuario = require('./src/api/routes/Usuarios')
const Local = require('./src/api/routes/Local')
const PORT = process.env.PORT || 7070

app.use(express.json())

app.use('/oficina', Oficina)
app.use('/usuario', Usuario)
app.use('/local', Local)

app.listen(PORT, function(){
    console.log('Servidor escutando...')
})