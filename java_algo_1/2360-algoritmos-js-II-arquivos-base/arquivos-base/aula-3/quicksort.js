const listaLivros = require('./array');
const trocaLugar = require('./encontramenor')

function quickSort(array, esquerda, direita){

    if(array.length > 1){
        let i = particiona(array, esquerda, direita);
        if(esquerda < i - 1){
            quickSort(array, esquerda, i - 1);
        }
        if(i < direita){
            quickSort(array, i, direita)
        }
    }
    return array;
}

function particiona(array, esquerda, direita){
    console.log('array', array);
    console.log('esquerda','direita', esquerda, direita);
    let pivo = array[Math.floor((esquerda+direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++;
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita--;
        }
        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))