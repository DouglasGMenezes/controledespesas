// Importa o módulo DespesasRepository 
const DespesasRepository = require('./DespesasRepository');

let listaUsuarios = [];
let idGerador = 1;


const list = () => listaUsuarios;

const insert = (usuario) => {
    if(!usuario.nome || !usuario.email) 
        {return undefined};

    usuario.id = idGerador++;
    listaUsuarios.push(usuario);
    return usuario
}

const getById = (id) => {
    const usuario = listaUsuarios.find(usuario => usuario.id == id);
    const despesa = DespesasRepository.list().find(despesa => despesa.idUsuario == id);
    return { usuario, despesa };
};

const atualizar = (id, usuario) => {
    if(!usuario.nome || !usuario.email) 
        {return undefined};

    let indiceUsuario = listaUsuarios.findIndex(usuario => usuario.id == id);

    if(indiceUsuario == -1) return;

    usuario.id = id;
    listaUsuarios[indiceUsuario] = usuario;
    return usuario;
}


const deletar = (id) => {
    let indiceUsuario = listaUsuarios.findIndex(usuario => usuario.id == id);

    return indiceUsuario !== -1 ? listaUsuarios.splice(indiceUsuario, 1)[0] : undefined;
}

module.exports = {
    list,
    insert,
    getById,
    atualizar,
    deletar
}


