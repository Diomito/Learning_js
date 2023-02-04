const cliente = {
	nome: "João", 
	idade: 24,
	email: "joao@Teste.com",
	telefone: ["11666668888", "11445569874"],
};

cliente.enderecos = [
    {rua: "rua taltal", 
    numero: 234,
    apartamento: true,
    complemento: "ap 54",
    }
];

cliente.enderecos.push({
    rua: "nova rua",
    numero: "123",
    apartamento: false,
});

console.log(cliente.enderecos)