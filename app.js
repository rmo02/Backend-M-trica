const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { eAdmin } = require('./middlewares/auth');
const User = require('./models/User');

const Item = require('./models/Itens');

app.use(express.json());

//rota teste para admin
app.get('/', eAdmin, async (req, res) => {
    await User.findAll({
        attributes: ['id', 'name', 'email'],
        order: [['id', "DESC"]]
    })
    .then((users) => {
        return res.json({
            erro: false,
            users,
            id_usuario_logado: req.userId
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!"
        });
    });    
});

//cadastrar usuário
app.post('/cadastrar', async (req, res) => {
    var dados = req.body;

    dados.password = await bcrypt.hash(dados.password, 8);

    await User.create(dados)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });    
});

//rota para fazer login
app.post('/login', async (req, res) => {

    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email
        }
    });

    if(user === null){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta!"
        });
    }

    if(!(await bcrypt.compare(req.body.password, user.password))){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta!"
        });
    }

    var token = jwt.sign({id: user.id}, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
        //expiresIn: 600 //10 min
        //expiresIn: 60 //1 min
        expiresIn: '7d' // 7 dia
    });

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token
    });
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


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});