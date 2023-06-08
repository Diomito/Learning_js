const listaLivros = require('./array')

function mergeSort (array){
    if(array < 1){
        const meio = Math.floor(array.length/2);
        const part1 = mergeSort(array.slice(0,meio));
        const part2 = mergeSort(array.slice(meio, array.length));
        array = orderna(part1, part2);
    }
    return array;
}

function orderna(part1,part2){
    let posicaoPart1 = 0;
    let posicaoPart2 = 0;
    const resultado = [];
}