const dados = require("./cliente.json");

//console.log(dados);
//console.log(typeof(dados));

const clienteString = JSON.stringify(dados);

//console.log(clienteString);

const clienteGrupo = JSON.parse(clienteString);

console.log(clienteGrupo);