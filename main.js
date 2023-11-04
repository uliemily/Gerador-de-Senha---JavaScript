let SenhaGerada = document.querySelector('.senha-gerada')
let maiusculas = document.querySelector('.chk-maiusculas')
let minusculas = document.querySelector('.chk-minusculas')
let numeros = document.querySelector('.chk-numeros')
let simbolos1 = document.querySelector('.chk-simbolos')
let quantidadeCaracteres = document.querySelector('.qtd-caracteres');

function randMaiusculas(min = 65, max = 90) {
    return Math.floor(Math.random() * (max - min) + min);
};

function randMinusculas(min = 97, max = 122) {
    return Math.floor(Math.random() * (max - min) + min);
};

function randNumeros(min = 48, max = 57) {
    return Math.floor(Math.random() * (max - min) + min);
};

const simbolos = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '+', '-', '/', '|', '^', '~'];
function randSimbolos(min = 0, max = 15) {
    return Math.floor(Math.random() * (max - min) + min);

};

let btnGerarSenha = document.querySelector('.gerar-senha');
btnGerarSenha.addEventListener('click', gerarSenha);

function gerarSenha() {
    let arrayCaracteres = []
    let qtdCaracteres = Number(quantidadeCaracteres.value);
    let listaCaracteres = []

    for (let i = arrayCaracteres.length; i < qtdCaracteres; i++) {

        if (maiusculas.checked) {
            arrayCaracteres += String.fromCharCode(randMaiusculas())
        }

        if (minusculas.checked) {
            arrayCaracteres += String.fromCharCode(randMinusculas())
        }

        if (numeros.checked) {
            arrayCaracteres += String.fromCharCode(randNumeros())
        }

        if (simbolos1.checked) {
            arrayCaracteres += (simbolos[randSimbolos()])
        }
        listaCaracteres.push(arrayCaracteres[i])
    }
    SenhaGerada.innerHTML = (listaCaracteres.join(''))

}


