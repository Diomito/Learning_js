const notas=[10, 9.5, 7, 6, 8];

const novaNotas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(novaNotas)