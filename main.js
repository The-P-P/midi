
function tocaSom(idTagAudio){
    const elemento =  document.querySelector(idTagAudio);

    if (elemento && elemento.localName === 'audio'){
            elemento.play();
    
    }
    else{
        console.log('elemento ou seletor nao encontrado')

    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i]
    const som = tecla.classList[1]
    const idAudio = `#som_${som}`

    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
