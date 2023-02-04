const cliente = {
	nome: "João", 
	idade: 24,
	email: "joao@Teste.com",
	telefone: ["11666668888", "11445569874"],
};

cliente.endereco = {
    rua: "rua taltal", 
    numero: 234,
    apartamento: true,
    complemento: "ap 54",
};

function ligaCliente(teleComer, teleResiden){
    console.log(`Ligando para ${teleComer}`);
    console.log(`Ligando para ${teleResiden}`);
}

ligaCliente(...cliente.telefone)