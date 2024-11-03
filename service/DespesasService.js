const despesaRepository = require('../repository/DespesaRepository');


const list = () => despesaRepository.list();

const insert = (despesa) => {
    if( despesa && despesa.descricao && despesa.valor && despesa.vencimento && despesa.status && despesa.idUsuario ) 
        { return despesaRepository.insert(despesa) }
    else 
        { throw { id: 400, msg: "Despesa com dados incorretos"} }
}

const getById = (id) => {
    let despesa = despesaRepository.getById(id);
    if(despesa) { return despesa }
    else { throw { id: 404, msg: "Despesa não encontrada!" } }
}

const atualizar = (id, despesa) => {
    if( despesa && despesa.descricao && despesa.valor && despesa.vencimento && despesa.status ) {
        const despesaAtualizada = despesaRepository.atualizar(id, despesa);

        if(despesaAtualizada) { return despesaAtualizada } 

        else { throw {id:404, msg: "Despesa não encontrada"} }
    }
    else { throw {id:400, msg: "Despesa com dados incorretos"} }
}

const deletar = (id) => {
    const despesa = despesaRepository.deletar(id);
    if (!despesa) throw { id: 404, msg: "Despesa não encontrada!" };
    
    return despesa;
}

module.exports = {
    list,
    insert,
    getById,
    atualizar,
    deletar
}
