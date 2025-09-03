
const express = require('express');
const cors = require ('cors');
const bodyParser = require('body-parser');

const controller = require('./controller/controllerTarefa.cjs');

// instanciando o Express//
const app = express();

// Configuração dos Methodos que serão utilizados e Acesso do CRUD
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    app.use(cors());
    next();
});

const bodyParserJson = bodyParser.json()

// Metodo Get, testando!!
app.get('/',  async function (req, res) {
    console.log('Método http utilizado:',req.method);
    let menu = controller.menu();
    let question = controller.questUser();
    res.status(200);
    return res.json({message:`Passou aqui!`});
});

app.get('/visualizar', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.visualizarUser(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});

app.post('/cadastrar', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.cadastrarTarefa(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});

app.put('/atualizar', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.atualizarTarefa(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});

app.delete('/excluir', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.excluirTarefa(req.body);
    res.status(200);
    return res.json({message: `Error,`})
    
});
    

module.exports = app;