const notas = [10, 8.5, 7, 7.5];

let somaNotas = 0;

for (i = 0; i < notas.length; i++){
 somaNotas += notas[i];
}
const media = somaNotas/notas.length

console.log(`a média é ${media}`)