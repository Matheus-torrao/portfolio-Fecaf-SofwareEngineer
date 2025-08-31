
const express = require('express');
const cors = require ('cors');
const bodyParser = require('body-parser');

const controller = require('./controller/controllerTarefa.cjs');

// instanciando o Express//
const server = express();

// Configuração dos Methodos que serão utilizados e Acesso do CRUD
server.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    server.use(cors());
    next();
});

const bodyParserJson = bodyParser.json()
// Maneira padronizada de startar um Servidor na porta listada! 
server.listen('3000', () =>{
    console.log("Server Running: http://localhost:3000")
});

// Metodo Get, testando!!
server.get('/',  async function (req, res) {
    console.log('Método http utilizado:',req.method);
    let menu = controller.menu();
    let question = controller.questUser();
    res.status(200);
    return res.json({message:`Passou aqui!`});
});

server.get('/visualizar', async function (req,res) {
    console.log('Método http utilizado:',req.method);
    let result = controller.visualizarUser();
    res.status(200);
    return res.json({message: `Error,`})
    
});