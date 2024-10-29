

let listarDespesas = [];
let idGerador = 1;


const list = () => listarDespesas;

const insert = (despesa) => {

    if( !despesa || !despesa.descricao || !despesa.valor || !despesa.vencimento || !despesa.status )
    { return undefined };

    despesa.id = idGerador++;
    listarDespesas.push(despesa);
    return despesa;
}
const getById = (id) => listarDespesas.find(despesa => despesa.id == id);

const atualizar = (id, despesa) => {
    if( !despesa || !despesa.descricao || !despesa.valor || !despesa.vencimento || !despesa.status )
    { return undefined };

    let indiceDespesa = listarDespesas.findIndex( despesa => despesa.id == id )

    if( indiceDespesa == -1 ) return ;

    despesa.id = id;
    listarDespesas[indiceDespesa] = despesa;
    return despesa;
}
const deletar = (id) => {
    let indiceDespesa = listarDespesas.findIndex( despesa => despesa.id == id );

    return indiceDespesa !== -1 ? listarDespesas.splice( indiceDespesa, 1 )[0] : undefined;
}


export default {
    list,
    insert,
    getById,
    atualizar,
    deletar
};























/////////////////////////////






// class DespesasRepository {
//     constructor() {
//         this.listarDespesas = [];
//         this.idGerador = 1;
//     }

//     // Listar todas as despesas
//     list() {
//         return this.listarDespesas;
//     }

//     // Inserir uma nova despesa
//     insertDP(despesa) {
//         if (!despesa || !despesa.descricao || !despesa.valor || !despesa.vencimento || !despesa.status) {
//             return undefined;
//         }

//         despesa.id = this.idGerador++;
//         this.listarDespesas.push(despesa);
//         return despesa;
//     }

//     // Buscar uma despesa pelo ID
//     getById(id) {
//         return this.listarDespesas.find(despesa => despesa.id == id);
//     }

//     // Atualizar uma despesa existente pelo ID
//     atualizar(id, despesa) {
//         if (!despesa || !despesa.descricao || !despesa.valor || !despesa.vencimento || !despesa.status) {
//             return undefined;
//         }

//         const indiceDespesa = this.listarDespesas.findIndex(d => d.id == id);

//         if (indiceDespesa == -1) return undefined;

//         despesa.id = id;
//         this.listarDespesas[indiceDespesa] = despesa;
//         return despesa;
//     }

//     // Deletar uma despesa pelo ID
//     deletar(id) {
//         const indiceDespesa = this.listarDespesas.findIndex(despesa => despesa.id == id);
//         return indiceDespesa !== -1 ? this.listarDespesas.splice(indiceDespesa, 1)[0] : undefined;
//     }
// }

// export default DespesasRepository;

