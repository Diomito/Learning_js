const livros = require('./listaLivros');

function menorValor(arrProducts, positionInital){
    let maisBarato = positionInital;

    for (let i = positionInital; i < arrProducts.length; i++) {
        if (arrProducts[i].preco < arrProducts[maisBarato].preco){
            maisBarato = i;
             }
        }
        return maisBarato;
}

module.exports = menorValor;