const usuarioService = require('../service/UsuarioService');

//Listar Usuários
function list(req, res) {
    res.json(usuarioService.list())
}

//Buscar por id
function getById(req, res) {
  const id = +req.params.id;

  try { res.json(usuarioService.getById(id)) }
  catch(err) { res.status(err.id).json(err) }
}

//Inserir
function insert(req, res) {
    const usuario = req.body;
    try{
      const usuarioInserido = usuarioService.insert(usuario);
      res.status(201).json(usuarioInserido)
    }
    catch(err){
      res.status(err.id).json(err)
    }
}

//Atualizar
function atualizar(req, res) {
  const id = +req.params.id;
  const usuario = req.body;
  try{
    const usuarioAtualizado = usuarioService.atualizar(id, usuario);
    res.json(usuarioAtualizado)
  }
  catch(err){
    res.status(err.id).json(err)
  }
}

//Deletar
function deletar(req, res) {
  const id = +req.params.id;

  try { res.json(usuarioService.deletar(id)) } 
  catch(err) { res.status(err.id).json(err) }
}

module.exports = {
    list,
    insert,
    getById,
    atualizar,
    deletar
    }