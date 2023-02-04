const clientes = require("./clientes.json");

function ordena (lista, propriedades){
    const result = lista.sort((a,b)=> {
        if (a[propriedades] < b[propriedades]){
            return -1;
        }
        if (a[propriedades] > b[propriedades]){
            return 1;
        }
        return 0;
    });
    return result;
}
const ordenaNome = ordena(clientes,"nome");
console.log(ordenaNome);