function login() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var language = document.getElementById('language').value;
    verificarInf(name, age, language)
}
function verificarInf(n, a, l) {
    var resultadoVerificado = document.getElementById("msgErroLogin");
    if (n != "") {
        if (a != "") {
            if (l != "") {
                pgloggedIn(n, a, l);
            } else {
                resultadoVerificado.innerHTML = "Digite a linguagem de programação você está estudando.";
            }
        } else {
            resultadoVerificado.innerHTML = "Digite sua idade.";
        }
    } else {
        resultadoVerificado.innerHTML = "Digite seu nome por favor.";
    }
}
function sair() {
    document.querySelector(".login").style.display = "flex";

    document.querySelector(".loggedIn").style.display = "none";

    var usuario = document.getElementById("usuario");
    var texto = document.getElementById("texto");
    var pergunta = document.getElementById("pergunta");


    usuario.value = "";
    texto.value = "";
    pergunta.value = "";
}

function pgloggedIn(n, a, l) {
    document.querySelector(".loggedIn").style.display = "flex";
    document.querySelector(".login").style.display = "none";

    var usuario = document.getElementById("usuario");
    var texto = document.getElementById("texto");
    var pergunta = document.getElementById("pergunta");


    usuario.innerHTML = "Ola " + n;
    texto.innerHTML = "Olá " + n + ", você tem " + a + " anos e já está aprendendo " + l + "!";
    pergunta.innerHTML = "Você gosta de estudar " + l + "? Responda com o número 1 para SIM ou 2 para NÃO.";
}

function responder() {
    var pergunta = document.getElementById('quest').value;
    var resultadoVerificado = document.getElementById("msgResposta");

    console.log(pergunta);

    if (pergunta == 1) {
        resultadoVerificado.innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso.';
    } else if (pergunta == 2) {
        resultadoVerificado.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?";
    } else {
        resultadoVerificado.innerHTML = "Numero invalido.<br>Responda com o número 1 para SIM ou 2 para NÃO. ";
    }
}
