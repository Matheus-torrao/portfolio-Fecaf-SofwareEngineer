const { resolve } = require('path');
const readline = require('readline');

const model = require('../model/tarefas.json');
const { execPath } = require('process');
const { error } = require('console');

const tarefas = model.tarefas;


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
    try{
        const opcao = await askQuestion('Digite uma Opção (1/4): ');
        const result = Number(opcao);

        if(isNaN(opcao)) {
            throw new error('Valor Digitado não é um número Válido!')
        }
    console.log("Você escolheu:", opcao);
    } catch (error) {
      console.error("Ocorreu um erro:", error.message);
    } finally {
      rl.close(); 
    }
  }

const menu = async function appMenu () {
    const opcoes = [
        "1 - Criar tarefa",
        "2 - Visualizar tarefa",
        "3 - Atualizar tarefa",
        "4 - Excluir tarefa",
        "5 - Sair",
      ];
    
      console.log("\n===== Menu de Opções =====\n");
      opcoes.forEach((op) => console.log(op));
    
      try {
        const resposta = await askQuestion("\nDigite uma opção: ");
        const opcao = Number(resposta);
    
        switch (opcao) {

          case 1:
            cadastrarTarefa();
            break;

          case 2:
            visualizarTarefa();
            break;

          case 3:
            atualizarTarefa();
            break;
            
          case 4:
            excluirTarefa();
            break;

          case 5:
            console.log(" Saindo do programa.");
            rl.close();
            return;

          default:
            console.log(" Opção inválida!");
        }

        menu();
    
      } catch (error) {
        console.error("Erro:", error.message);
        rl.close();
      }
    };


const cadastrarTarefa = async function Cadastrar (){
  const novaTarefa = await askQuestion('Digite a descrição da Tarefa: ')
  tarefas.push(novaTarefa);
  console.log('Tarefa Adicionada com sucesso!')
}
const visualizarTarefa = async function Visualizar (){
  console.log(" Visualizando tarefas...");
  if (tarefas.length === 0){
      console.log('Nenhuma tarefa Cadastrada')
  }else{
      tarefas.forEach((t, i) => console.log(`${i + 1} - ${t}`))
  }
}

const atualizarTarefa = async function Atualizar (){
  console.log(" Atualizando tarefa...");
  if (tarefas.length === 0 ){
    console.log('Nenhuma tarefa para ser atualizada!')
}else{
    console.log('\nEscolha a Tarefa para Atualizar: ');
    tarefas.forEach((t,i) => console.log(`${i + 1} - ${t}`));
    const indexUpdate = Number(await askQuestion('Número da Tarefa: ')) - 1;
    if(indexUpdate >= 0 && indexUpdate <= tarefas.length){
        const novaDescricao = await askQuestion('Digite a nova Descrição: ');
        tarefas[indexUpdate] = novaDescricao;
        console.log('Tarefa Atualizada com Sucesso!')
    }else{
        console.log('Número Inválido')
    }
}
}
const excluirTarefa = async function Excluir (){
  console.log(" Excluindo tarefa...");
  if(tarefas.length === 0 ){
      console.log('Nenhuma tarefa para excluir.');
      rl.close();
  }
  console.log('\nEscolha a tarefa para excluir');
  tarefas.forEach((t,i) => console.log(`${i + 1 } - ${t}`));
  const indexDelete = Number(await askQuestion('Número da tarefa: ')) - 1;
  if (indexDelete >= 0 && indexDelete < tarefas.length){
      tarefas.splice(indexDelete, 1);
      console.log('Tarefa removida com sucesso!');
  }else{
      console.log('Número inválido!')
  }
}

module.exports = {
    askQuestion,
    questUser,
    menu,
    cadastrarTarefa,
    visualizarTarefa,
    atualizarTarefa,
    excluirTarefa,
    upgradeTarefa,
};