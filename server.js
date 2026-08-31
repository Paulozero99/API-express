import express from 'express'

const app = express()
const PORTA = 3000

let usuarios = [
    {id: 1, nome: 'Gabriel'},
    {id: 2, nome: 'João'},
    {id: 3, nome: 'Paulo'}
]

app.get('/', (req, res) => {
    res.send(`Servidor Express funcionando!`)
})

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

app.post('/usuarios', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: "lucas"
    }

    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario)
})

app.get('usuario/:id', (req, res) => {
    const id = req.params.id

    const usuario = usuarios.find(u => u.id === parseInt(id))

    if(!usuario){
        return res.status(404).json({error: "Usuario não encontrado!"})
    }

    res.json(usuario)
})

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})