// model/tarefas.cjs
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;



const inserttarefa = async function (dadosTarefa) {
    let sql = `Insert into tbl_Tarefas (
        nome,
        tipo
    ) values(
        '${dadosTarefa.nome}',
        '${dadosTarefa.tipo}' 
    )`

    let result = await prisma.$executeRawunsafe(sql);
    if (result){
        return true
    }else{
        return false
    }
    
};

const upgradeTarefa = async function (dadosTarefa) {
    let sql = `update tbl_Tarefas set 
                    nome = '${dadosTarefa.nome}',
                    tipo = '${dadosTarefa.tipo}'
               where id = '${dadosTarefa.id}'
               `;
    let result = await prisma.$executeRawunsafe(sql);
    if (result){
        return true
    }else{
        return false
    }
};

const excluirTarefa = async function (id) {
    let sql = `Delete from tbl_Tarefas
                    where id = '${id}'
                `;
    let result = await prisma.$executeRawUnsafe(sql);
    if (result){
        return true
    }else{
        return false
    }
};

module.exports = {
    inserttarefa,
    upgradeTarefa,
    excluirTarefa
};
