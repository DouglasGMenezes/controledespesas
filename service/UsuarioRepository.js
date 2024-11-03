const UsuarioRepository = require('../repository/UsuarioRepository');

const list = () => UsuarioRepository.list();

const insert = (usuario) => {
    if( usuario && usuario.nome && usuario.email ) 
        { return UsuarioRepository.insert(usuario) }
    else 
        { throw { id: 400, msg: "Usuário com dados incorretos"} }
}

const getById = (id) => {
    let usuario = UsuarioRepository.getById(id);
    if(usuario) { return usuario }
    else { throw { id: 404, msg: "Usuário não encontrado!" } }
}

const atualizar = (id, usuario) => {
    if( usuario && usuario.nome && usuario.email ) {
        const usuarioAtualizado = UsuarioRepository.atualizar(id, usuario);

        if(usuarioAtualizado) { return usuarioAtualizado } 

        else { throw {id:404, msg: "Usuário não encontrado"} }
    }
    else { throw {id:400, msg: "Usuário com dados incorretos"} }
}

const deletar = (id) => {
    const usuario = UsuarioRepository.deletar(id);
    if (!usuario) throw { id: 404, msg: "Usuário não encontrado!" };
    
    return usuario;
}


module.exports = {
    list,
    insert,
    getById,
    atualizar,
    deletar
}