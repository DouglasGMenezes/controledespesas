const DespesasRepository = require('./DespesasRepository');

//Cenário de sucesso
test('Quando criar a despesa, deve retornar e conter na lista a despesa com id=1', () => {
        //despesa que se espera ser cadastrada (com id)
        const despesaInseridaEsperada = {
            id: 1,
            descricao: "Aluguel",
            valor: 1.000,
            vencimentço: "2024-10-30",
            status: "Pago"
        };
        //Criando a despesa no repositorio
        const despesaInserida = despesasRepository.insertDP({
            descricao: "Aluguel",
            valor: 1.000,
            vencimento: "2024-10-30",
            status: "Pago"
        });
        //Verificando se a despesa criada que retornou está correta
        expect(despesaInserida).toEqual(despesaInseridaEsperada);
        //Verificando se a despesa foi inserida no repositório
        expect(despesasRepository.list()).toContainEqual(despesaInseridaEsperada);
});


//Cenário de exceção
test('Quando criar a despesa sem valor, não deve retornar e não insere na lista', () => {
        //Criado o cenário (com id=2 porque conta o teste anterior) para a despesa inserida sem valor
        const despesaInseridaErrada = {
            id: 2,
            descricao: "Mercado",
            vencimento: "2024-10-30",
            status: "Pago"
        };
        //Inserindo o produto sem categoria
        const despesaInserida = despesasRepository.insert({
            descricao: "Mercado",
            vencimento: "2024-10-30",
            status: "Pago"
        });
        //O despesa não deve retornar
        expect(despesaInserida).toEqual(undefined);
        //Não deve inserir na lista a despesa errada
        expect(despesasRepository.list()).not.toContainEqual(despesaInseridaErrada);
});


//Cenário de sucesso - getById()
test('Quando buscar por um id existente, deve retornar o dado corretamente', () => {
    //Vou inserir um segundo produto para o teste (id=2)
    const despesaInserida = despesasRepository.insert({
        descricao: "Mercado",
        valor: 500,
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: 1
    });
    const resultado = despesasRepository.getById(despesaInserida.id);
    //teste mais simples:
    expect(resultado).toBeDefined();
    expect(resultado.nome).toBe("Mercado")
});


//Cenário de exceção - getById()
test('Quando buscar por id inexistente, deve retornar undefined', () => {
    const resultado = despesasRepository.getById(10);
    expect(resultado).toBeUndefined();
});


//Cenário de sucesso - deletar()
test('Quando deletar um id existente, deve remover e retornar o dado', () => {
    const despesaDeletadaEsperada = {
        id: 2,
        descricao: "Aluguel",
        vencimento: "2024-10-30",
        status: "Pago",
        idUsuario: 1
    };
    const quantidadeEsperada = 1;
    resultado = despesasRepository.deletar(2);
    expect(resultado).toEqual(despesaDeletadaEsperada);
    expect(despesasRepository.list().length).toBe(quantidadeEsperada);

});

//Cenário de exceção - deletar()
test('Quando deletar uma despesa com id inexistente, deve retornar undefined', () => {
    const resultado = despesasRepository.deletar(10);
    expect(resultado).toBeUndefined();
});







