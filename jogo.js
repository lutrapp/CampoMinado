var pontos = document.getElementById('pontos');
var bomba = document.getElementById('bombas');
var somaPontos = 0;
var somaBombas = 0;
// este é o array de todas as divs do campo
var campoDiv = Array();

function jogar() {
    somaPontos = 0;
    somaBombas = 0;
    pontos.innerHTML = 0;
    bomba.innerHTML = 0;
    // para limpar os backgrounds com figuras
    campoDiv.forEach(element => {
        element.style.backgroundImage = "";
        element.firstElementChild.value = novoValor();
    });
}
// para gerar um número aleatório 0 ou 1
function novoValor() {
    x = Math.round(Math.random() * 1);
    return x;
}

// acessa os inputs que tem ou não o elemento "bomba"
function verificaCampo() {
    clicado = Array();
    divVerifica = this.firstElementChild.value;
    if (this.style.backgroundImage == "") {
        if (divVerifica == 0) {
            this.style.backgroundImage = "url(img/grama.jpg)";
            somaPontos += 1;
        }

        if (divVerifica == 1) {
            this.style.backgroundImage = "url(img/bomba.jpg)";
            somaBombas += 1;
        }
        if(somaPontos>=30){
            alert("Você ganhou!");
            return;
        }
        if(somaBombas>=30){
            alert("Você perdeu!");
            return;
        }
        pontos.innerHTML = somaPontos;
        bombas.innerHTML = somaBombas;
    }
}

// para conseguir acessar todos as divs
for (i = 0; i < 75; i++) {
    var section = document.querySelector('section');
    section.insertAdjacentHTML('beforeend', '<div><input type="hidden" value="' + novoValor() + '" ></div>');

    let campo = section.getElementsByTagName('div')[i];
    campoDiv[i] = campo;
    campo.addEventListener('click', verificaCampo);
}
