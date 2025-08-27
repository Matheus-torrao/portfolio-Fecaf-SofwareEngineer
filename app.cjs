//import express from "express";
//import cors from "cors";
//import bodyParser from "body-parser";

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
    console.log("Server Running this Port")
});
// Metodo Get, testando!!
server.get('/',  async function (req, res) {
    let dados = req.body;
    res.status(200);
    return res.json({message:`Tarefa cadastrada`});
});

server.post('/Cadastro', cors(),bodyParserJson, async function (req, res) {
    let dados = req.body;
    let result = await controller.InserirDados(dados)
    if (result){
        res.status(200)
        res.json();
    }else{
        res.status(400)
        res.json({message: 'Erro'})
    }
});