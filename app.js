import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

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
server.get('/test', (req, res) =>{
    return res.json({message:`Hello world`});
});