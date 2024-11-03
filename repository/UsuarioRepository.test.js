const usuarioRepository = require('./UsuarioRepository');
const DespesasRepository = require('./DespesasRepository');

//cenario de sucesso - insert()
test('Quando inserir um usuario corretamente, deve retornar o usuario inserido', async () => {
    const usuarioInseridoEsperado = {
        id: 1,
        nome: "Fulano",
        email: "fulano@gmail"
    };
    //Inserindo usuario no repositorio
    const usuarioInserido = usuarioRepository.insert({
        nome: "Fulano",
        email: "fulano@gmail"
    });
    //verificando se o usuario foi inserido
    expect(usuarioInserido).toEqual(usuarioInseridoEsperado);
    //verificando se o usuario foi inserido na lista
    expect(usuarioRepository.list()).toContainEqual(usuarioInseridoEsperado);
}
);

//cenario de excecao - insert()
test('Quando inserir um usuario incorretamente, deve retornar undefined', async () => {
    const usuarioInseridoErrado = {
        id: 2,
        nome: "Fulano",
    };
    //Inserindo usuario sem email
    const usuarioInserido = usuarioRepository.insert({
        nome: "Fulano",
    });
    //O usuario não deve retornar
    expect(usuarioInserido).toEqual(undefined);
    //Não deve inserir na lista o usuario errado
    expect(usuarioRepository.list()).not.toContainEqual(usuarioInseridoErrado);
}
);

//insert despesa no usuário
test('Quando inserir uma despesa no usuario, deve retornar a despesa inserida', async () => {
    const despesaInseridaEsperada = {
        id: 1,
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: "1"
    };
    //Inserindo despesa no repositorio
    const despesaInserida = DespesasRepository.insert({
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: "1"
    });
    //verificando se a despesa foi inserida
    expect(despesaInserida).toEqual(despesaInseridaEsperada);
    //verificando se a despesa foi inserida na lista
    expect(DespesasRepository.list()).toContainEqual(despesaInseridaEsperada);
}
);

//cenario de excecao - insert()
test('Quando inserir uma despesa no usuario incorretamente, deve retornar undefined', async () => {
    const despesaInseridaErrada = {
        id: 2,
        descricao: "Mercado",
        vencimento: "2024-10-30",
        status: "Pago"
    };
    //Inserindo despesa sem valor
    const despesaInserida = DespesasRepository.insert({
        descricao: "Mercado",
        vencimento: "2024-10-30",
        status: "Pago"
    });
    //A despesa não deve retornar
    expect(despesaInserida).toEqual(undefined);
    //Não deve inserir na lista a despesa errada
    expect(DespesasRepository.list()).not.toContainEqual(despesaInseridaErrada);
}
);

//Cenário de sucesso - getById()
test('Quando buscar por um id existente, deve retornar o dado corretamente', async () => {
    //Vou inserir um segundo produto para o teste (id=2)
    const despesaInserida = DespesasRepository.insert({
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: 2
    });
    const resultado = DespesasRepository.getById(despesaInserida.id);
    //teste mais simples:
    expect(resultado).toBeDefined();
    expect(resultado.nome).toBe("Mercado")
}
);

//Cenário de exceção - getById()
test('Quando buscar por id inexistente, deve retornar undefined', async () => {
    const resultado = DespesasRepository.getById(10);
    expect(resultado).toBeUndefined();
}
);

//Cenário de sucesso - deletar()
test('Quando deletar um id existente, deve remover e retornar o dado', async () => {
    const despesaDeletadaEsperada = {
        id: 2,
        descricao: "Aluguel",
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: 1
    };
    const quantidadeEsperada = 1;
    resultado = DespesasRepository.deletar(2);
    expect(resultado).toEqual(despesaDeletadaEsperada);
    expect(DespesasRepository.list().length).toBe(quantidadeEsperada);

}
);

//Cenário de exceção - deletar()

test('Quando deletar um id inexistente, deve retornar undefined', async () => {
    const resultado = DespesasRepository.deletar(10);
    expect(resultado).toBeUndefined();

}
);

//Cenário de sucesso - atualizar()
test('Quando atualizar um id existente, deve retornar o dado atualizado', async () => {
    const despesaAtualizadaEsperada = {
        id: 1,
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: 1
    };
    const despesaAtualizada = DespesasRepository.atualizar(1, {
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: 1
    });
    expect(despesaAtualizada).toEqual(despesaAtualizadaEsperada);
}
);

//Cenário de exceção - atualizar()
test('Quando atualizar um id inexistente, deve retornar undefined', async () => {
    const resultado = DespesasRepository.atualizar(10, {
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: 1
    });
    expect(resultado).toBeUndefined();
}
);

//Cenário de exceção - atualizar()
test('Quando atualizar um id com dados incorretos, deve retornar undefined', async () => {
    const resultado = DespesasRepository.atualizar(1, {
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago"
    });
    expect(resultado).toBeUndefined();
}
);

//Cenário de sucesso - list()

test('Quando listar as despesas, deve retornar a lista de despesas', async () => {
    const resultado = DespesasRepository.list();
    expect(resultado).toBeDefined();
}

);





