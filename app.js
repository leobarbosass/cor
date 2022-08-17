'use strict'

function trocarCor(){
    const cor = document.getElementById('cor').value.toUpperCase()
    const body = document.getElementById('body')
    document.body.style.backgroundColor = `#${cor}`
    
    if(cor == 'VERMELHO' ){
        body.style.backgroundColor = '#ff0000'
    }
    else if(cor == 'VERDE' ){
        body.style.backgroundColor = '#006400'
    }
    else if(cor == 'AMARELO' ){
        body.style.backgroundColor = '#eead2d'
    }
    else if(cor == 'AZUL' ){
        body.style.backgroundColor = '#00008b'
    } 
}

const botao = document.getElementById('botao').addEventListener('click', trocarCor)
 