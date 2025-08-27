const { resolve } = require('path');
const readline = require('readline');

const model = require('../model/tarefas.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion (query){
    return new Promise (resolve =>{
        rl.question(query,resolve)
    });
}

async function questUser() {
    const opcao = await askQuestion('Digite uma Opção (1/4): ');
    rl.close();
}
const menu = async function appMenu () {
    const opces = ['1 - Criar tarefa',
        '2 - Visualizar Tarefa', 
        '3 - Atualizar Tarefa', 
        '4 - Excluir Tarefa']
    console.log('Menu de Opções:');
    console.log(opces)
}

const updateUser = async function Update () {
    const nometarefa = await askQuestion('Digite o nome da Tarefa:'); 
    console.log('chegou aqui')
    rl.close();
}

module.exports = {
    askQuestion,
    questUser,
    menu,
    updateUser
}