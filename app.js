let listaDeNumerosSorteados = [];
let numeroLimite = 4;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

function exibirTextoNaTela(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.1});
    

    


}

function exibirMensagemInicial() {
    
    exibirTextoNaTela('H1','Jogo do Número Secreto');
    exibirTextoNaTela('P',`Escolha um número de 1 a ${numeroLimite}.`);
};

exibirMensagemInicial();

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo() ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('verificar').removeAttribute('disabled');
}

function verificarChute() {


    let chute = document.querySelector('input').value;

    console.log('o botão foi clicado');

    if(chute==numeroSecreto){
        palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela('h1','Acertou!');        
        exibirTextoNaTela('p',`Você Descobriu o Número Secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('verificar').setAttribute('disabled',true);
        //exibirTextoNaTela('p','Você Descobriu o Número Secreto');

    } else {

        if (chute>numeroSecreto){
            
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);

        }else{

            exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);

        }
        limparCampo() ;
        tentativas++;
    }

    console.log(numeroSecreto);
    console.log(chute);
    console.log(chute==numeroSecreto);



}

function gerarNumeroAleatorio() {
    //return = retornar o valor na função quando necessario para passar para uma variavel
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementoNaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementoNaLista ==numeroLimite){

        listaDeNumerosSorteados=[];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        console.log(numeroEscolhido);
        return gerarNumeroAleatorio();

    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
