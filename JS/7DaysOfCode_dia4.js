var numeroSecreto;
var modoDeJogo = "";
var nomeP1 = "";
var nomeP2 = "";
var pontosP1 = 0;
var pontosP2 = 0;
var jogadorAtual = 1;
var passarMult = true;
var vidas = 3;
var win = false;
/* variaveis GI */
var ntentativas = document.getElementById("ntentativas");
var elementoResultado = document.getElementById("resultado");
var np1 = document.getElementById("np1");
var np2 = document.getElementById("np2");
/* Fim variaveis GI */

function modoJogo(modo) {
    if (modo == "m") {
        modoDeJogo = "Multiplayer";
        document.querySelector(".solo").style.display = "none";
        document.querySelector(".mult").style.display = "flex";
    } else if (modo == "s") {
        modoDeJogo = "Solo";
        document.querySelector(".mult").style.display = "none";
        document.querySelector(".solo").style.display = "flex";
    } else {
        console.log("error");

    }
    sortearNumero();
    document.querySelector(".jogador1").style.display = "flex";
    document.querySelector(".menuJogo").style.display = "none";
}

function voltar(tela) {
    if (tela == "p1") {
        document.querySelector(".menuJogo").style.display = "flex";
        document.querySelector(".jogador1").style.display = "none";
    } else if (tela == "p2") {
        document.querySelector(".jogador1").style.display = "flex";
        document.querySelector(".jogador2").style.display = "none";
        passarMult = true;
    }
}

function proximo(p) {
    nomeP1 = document.getElementById('nameP1').value;
    nomeP2 = document.getElementById('nameP2').value;
    if (verificar(nomeP1, nomeP2)) {
        if (p == "p") {
            document.querySelector(".jogador1").style.display = "none";
            document.querySelector(".jogador2").style.display = "flex";
        } else if (p = "s") {
            document.querySelector(".jogador2").style.display = "none";
            document.querySelector(".jogador1").style.display = "none";
            document.querySelector(".jogo").style.display = "flex";
            montarUI();
        }
    }
}

function verificar(nome1, nome2) {
    if (nome1 != "" && passarMult) {
        passarMult = false;
        return true;
    } else if (nome2 != "") {
        return true;
    }
    console.log("error");
    return false;
}

function sortearNumero() {
    numeroSecreto = parseInt(Math.random() * 11);
    console.log(numeroSecreto);
}

function chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    if (vidas > 0) {
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = "Parabéns! Você acertou!!!";
            win = true;
            addPonto();
        } else if (chute > 10 || chute < 0) {
            vidas--;
            elementoResultado.innerHTML = "Por favor escolha um número de 0 a 10.";
        } else {
            vidas--;
            elementoResultado.innerHTML = "Que pena, não é esse o numero, tente de novo.";
            if (chute > numeroSecreto) {
                elementoResultado.innerHTML += "<br>O número chutado é maior que o número correto.";
            } else {
                elementoResultado.innerHTML += "<br>O número chutado é menor que o número correto.";
            }
        }
    }


    if (vidas <= 0) {
        elementoResultado.innerHTML = "Você perdeu!!<br> O número secreto era " + numeroSecreto;
        addPonto();
    }
    chute = document.getElementById("valor").value = "";
    ntentativas.innerHTML = "Tentativas <br>" + vidas;
}

function montarUI() {
    n1 = nomeP1[0].toUpperCase() + nomeP1.substr(1) + "<br>Pontos: " + pontosP1;
    n2 = nomeP2[0].toUpperCase() + nomeP2.substr(1) + "<br>Pontos: " + pontosP2;
    if (jogadorAtual == 1) {
        np1.innerHTML = "Jogando: <br>" + n1;
    } else {
        np1.innerHTML = n1;
    }
    if (modoDeJogo == "Multiplayer") {
        if (jogadorAtual == 2) {
            np2.innerHTML = "Jogando: <br>" + n2;
        } else {
            np2.innerHTML = n2;
        }
    }
    ntentativas.innerHTML = "Tentativas <br>" + vidas;
}

function addPonto() {
    setTimeout(function () {
        elementoResultado.innerHTML = "";
    }, 1500);
    if (modoDeJogo == "Solo") {
        if (win) {
            pontosP1 += vidas;
        }
    } else if (modoDeJogo == "Multiplayer") {

        if (jogadorAtual == 1) {
            if (win)
                pontosP1 += vidas;
            jogadorAtual = 2;
        } else if (jogadorAtual == 2) {
            if (win)
                pontosP2 += vidas;
            jogadorAtual = 1;
        }

    }
    win = false;
    vidas = 3;
    montarUI();
    sortearNumero();
}
