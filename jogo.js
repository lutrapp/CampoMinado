var pontos = document.getElementById('pontos');
var bomba = document.getElementById('bombas');

function jogar() {
    pontos.innerHTML = 0;
    bomba.innerHTML = 0;

}
var somaPontos = 0;
var somaBombas = 0;
// acessa os inputs que tem ou não o elemento "bomba"
function verificaCampo() {

    divVerifica = this.firstElementChild.value;
    if (divVerifica == 0) {
        this.style.backgroundImage = "url(img/grama.jpg)";
        somaPontos += 1;
    }
    if (divVerifica == 1) {
        this.style.backgroundImage = "url(img/bomba.jpg)";
        somaBombas += 1;
    }

    pontos.innerHTML = somaPontos;
    bombas.innerHTML = somaBombas;
}

// para conseguir acessar todos as divs
for (i = 0; i < 100; i++) {
    campo = document.querySelector('section').getElementsByTagName('div')[i];
    campo.addEventListener('click', verificaCampo);
}
// console.log(campo);

function embaralha() {

}

console.log(embaralha())