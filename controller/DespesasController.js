const despesaSevice = require('../service/DespesaService');

//Listar Despesas
function list(req, res) {
    res.json(despesaSevice.list())
}

//Buscar por id
function getById(req, res) {
  const id = +req.params.id;

  try { res.json(despesaSevice.getById(id)) }
  catch(err) { res.status(err.id).json(err) }
}

//Inserir
function insert(req, res) {
    const despesa = req.body;
    try{
      const despesaInserida = despesaService.insert(despesa);
      res.status(201).json(despesaInserida)
    }
    catch(err){
      res.status(err.id).json(err)
    }
}

//Atualizar
function atualizar(req, res) {
  const id = +req.params.id;
  const despesa = req.body;
  try{
    const despesaAtualizada = despesaSevice.atualizar(id, despesa);
    res.json(despesaAtualizada)
  }
  catch(err){
    res.status(err.id).json(err)
  }
}

//Deletar
function deletar(req, res) {
  const id = +req.params.id;

  try { res.json(despesaSevice.deletar(id)) } 
  catch(err) { res.status(err.id).json(err) }
}

module.exports = {
    list,
    insert,
    getById,
    atualizar,
    deletar 
    }