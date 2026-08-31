import express from 'express'

const app = express()
const PORTA = 3000

app.get('/', (req, res) => {
    res.send(`Servidor Express funcionando!`)
})

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})