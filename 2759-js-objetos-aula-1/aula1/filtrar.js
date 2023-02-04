const clientes = require("./clientes.json");

function filtraApSemComple(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
};

const filtrados = filtraApSemComple(clientes);

console.log(filtrados);
