//chamando o express
const express = require('express');
const app = express();
//chamando os models
const User = require('./models/User');
const Item = require('./models/Itens');


//recebendo json
app.use(express.json());

app.get('/', async (req, res) => {
    res.send("página inicial")
});

//rota para cadastrar usuario
app.post('/cadastrar', async (req, res) => {
    //console.log(req.body);

    await User.create(req.body)
    .then(()=>{
        return res.json({
            error: false,
            mensagem: "usuario Cadastrado com sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            error: true,
            mensagem: "Erro: Usuário não cadastrado"
        })
    })
    res.send("Página cadastrar")
});

//rota para cadastrar item
app.post('/cadastrarItem', async (req, res) => {
    //console.log(req.body);

    await Item.create(req.body)
    .then(()=>{
        return res.json({
            error: false,
            mensagem: "Item Cadastrado com sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            error: true,
            mensagem: "Erro: Item não cadastrado"
        })
    })
    res.send("Página cadastrar")
});

app.listen(8080, ()=>{
    console.log("Servidor Iniciado")
})