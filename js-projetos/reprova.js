const alunos = ['ana', 'joao', 'caio', 'pedro'];
const notas = [7, 5, 10, 7];

const reprovados = alunos.filter((aluno, i)=> {
    return notas[i]<7;
})

console.log(reprovados)