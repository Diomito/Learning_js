function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio'){
                    elemento.play();
    }
    else{
        alert('Seletor ou elemento inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idSom);

    }
//teclas não ficam vermelhas
}
    for (let i = 0; i < listaDeTeclas.length; i++){
        const tecla=listaDeTeclas[i];

        tecla.onkeydown = function(evento){
            if(evento.code === 'Enter' || evento.code === 'Space'){
                tecla.classList.add('ativa');
            } 
        }
        tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
