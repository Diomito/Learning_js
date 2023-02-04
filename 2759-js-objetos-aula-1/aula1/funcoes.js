const cliente = {
	nome: "João", 
	idade: 24,
	email: "joao@Teste.com",
	telefone: ["11666668888", "11445569874"],
    saldo: 200,
    efetuapagamento: function (valor){
        if (valor > this.saldo){
        console.log("Saldo insuficiente");
        }else {
        this.saldo -= valor;
        console.log(`Pagamento efetuado, novo saldo ${this.saldo}`)
        }
    }
};

cliente.efetuapagamento(100)
