const notas = [10, 8.5, 7, 7.5];

let somaNotas = 0;

notas.forEach(function(nota) {
    somaNotas += nota;
});

const media = somaNotas/notas.length

console.log(`a média é ${media}`)