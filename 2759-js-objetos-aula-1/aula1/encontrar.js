const clientes = require("./clientes.json");

function encontra(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
};

const encontrado = encontra(clientes, "telefone", "19918820860");
console.log(encontrado);