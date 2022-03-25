if (7 == "sete") {
    console.log("igual");
}else{
    console.log("Diferente");
}

function verificar() {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    var tipo1 = document.getElementById('tipo1').value;
    var tipo2 = document.getElementById('tipo2').value;

    verificarTipoVar(valor1, tipo1, valor2, tipo2);
}
function verificarTipoVar(valor1, tipo1, valor2, tipo2) {
    var result = "";
    if (tipo1 == tipo2) {
        if (valor1 == valor2) {
            result = "As variáveis valor 1 e valor 2 tem o mesmo valor e tipos iguais.";
        } else {
            result = "As variáveis valor 1 e valor 2 não tem o mesmo valor e mas possui tipos iguais.";
        }
    } else {
        if (valor1 == valor2) {
            result = "As variáveis valor 1 e valor 2 tem o mesmo valor, mas tipos diferentes.";
        } else {
            result = "As variáveis valor 1 e valor 2 não tem o mesmo valor ou tipo.";
        }
    }
    imprimirResultado(valor1, tipo1, valor2, tipo2, result);
}

function imprimirResultado(valor1, tipo1, valor2, tipo2, result) {
    var resultadoVerificado = document.getElementById("resultado");
    resultadoVerificado.innerHTML =
        "<td>" + tipo1 + "</td>"
        + "<td>" + valor1 + "</td>"
        + "<td></td>"
        + "<td>" + tipo2 + "</td>"
        + "<td>" + valor2 + "</td>"
        + "<td>" + result + "</td>";

}