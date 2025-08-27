const tarefas = require('../model/tarefas.cjs');

const InserirDados = async function (dadosTarefa) {
    let result = await tarefas.inserttarefa(dadosTarefa)

    if (result){
        return true
    }else{
        return false
    }
    
};

module.exports = {
    InserirDados
}