const livros = require('./listaLivros');

function insertion(arr){
    
    for (let i = 0; i < arr.length; i++) {
        let analise = i;
        while (analise > 0 && arr[analise].preco < arr[analise - 1].preco){
            let itemAnalise = arr[analise];
            let itemAnterior = arr[analise - 1];
    
            arr[analise] = itemAnterior
            arr[analise - 1] = itemAnalise

            analise--
        };
    };
    console.log(arr);
};

insertion(livros)