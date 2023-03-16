const livros = require('./listaLivros');

function menorValor(arrProducts, positionInital){
    let maisBarato = positionInital;

    for (let atual = positionInital; atual < arrProducts.length; atual++){
    if (arrProducts[atual].preco < arrProducts[maisBarato].preco){
        maisBarato = atual
            }
        }
        return maisBarato;
}

//console.log(`o livro mais barato é ${livros[maisBarato].preco} e o seu titule é ${livros[maisBarato].titulo}`);

module.exports = menorValor;