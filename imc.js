function mensagem (tag,texto){
    let msg = document.querySelector(tag);
    msg.innerHTML = texto
}


mensagem('h1','Calcule seu imc');


function calculo(){

    let peso = document.getElementById('inputPeso').value;
    let altura = document.getElementById('inputAltura').value;
    let alturaCalculo = altura*altura
    let imc = peso / alturaCalculo 
    mensagem('h1', 'Seu IMC é ' + imc.toFixed(2))

}

function limparCampo(){
    peso = document.getElementById('inputPeso');
    peso.value = '';
    altura = document.getElementById('inputAltura')
    altura.value = '';
}

function novoImc(){
    limparCampo()
    mensagem('h1','Calcule seu imc');
    
}