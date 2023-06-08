const {edFolha, edGalho} = require('./arrays');

function juntaLista(lista1, lista2){
    let listaFinal = [];
    let atualLista1 = 0;
    let atualLista2 = 0;
    let atualFinal = 0;

    while(atualLista1 < lista1.length && atualLista2 < lista2.length){
        let produtolista1 = lista1[atualLista1];
        let produtolista2 = lista2[atualLista2];

        if (produtolista1.preco < produtolista2.preco){
            listaFinal[atualFinal] = produtolista1;
            atualLista1++;
        } else{
            listaFinal[atualFinal] = produtolista2;
            atualLista2++;
        }

        atualFinal++;
    }

    while (atualLista1 < lista1.length){
        listaFinal[atualFinal] = lista1[atualLista1];
        atualLista1++;
        atualFinal++
    }

    while (atualLista2 < lista2.length){
        listaFinal[atualFinal] = lista2[atualLista2];
        atualLista2++;
        atualFinal++
    }

    return listaFinal;
}

console.log(juntaLista(edFolha,edGalho))