var frutas = {
    nome: "frutas",
    itens: ["banana", "tomate", "maçã", "uva", "abacate"]
}
var laticinios = {
    nome: "laticinios",
    itens: ["leite vegetal", "leite de vaca", "leite em pó"]
}

var doces = {
    nome: "doces",
    itens: ["chiclete", "bala de ursinho"]
}


var categoria = [frutas, laticinios, doces]
mostrarCategorias();

var valorAntigo = [];
function addAlimento() {
    var veriCat = document.getElementById('categoria').value;
    var nAlimento = document.getElementById('nAlimento').value;


    for (let i = 0; i < categoria.length; i++) {
        if (veriCat == categoria[i].nome) {
            categoria[i].itens.push(nAlimento)
        }
    }
}

function mostrarCategorias() {
    var cat = document.getElementById("categoria");
    cat.innerHTML = "<option value=''>Categoria</option>";
    for (let i = 0; i < categoria.length; i++) {
        cat.innerHTML += "<option value='" + categoria[i].nome + "'>" + categoria[i].nome + "</option>";
    }
}

function mostrarLista() {

    document.querySelector(".lista").style.display = "flex";

    document.querySelector(".montarLista").style.display = "none";

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < categoria.length; i++) {
        for (let j = 0; j < categoria[i].itens.length; j++) {
            resultado.innerHTML += "<tr>"
                + "<td>" + categoria[i].itens[j] + "</td>"
                + "<td>" + categoria[i].nome + "</td>"
                + "<td></td>"
                + "<td></td>"
                + "<td>"
                + "<button type='submit' id='configList' onclick='telaEditar(" + i + "," + j + ")'>"
                + "<span class='icon'>"
                + "<ion-icon name='build-outline'></ion-icon>"
                + "</span>"
                + "</button>"
                + "</td>"
                + "<td>"
                + "<button type='submit' id='configList' onclick='excluir(" + i + "," + j + ")'>"
                + "<span class='icon'>"
                + "<ion-icon name='trash-outline'></ion-icon>"
                + "</span>"
                + "</button>"
                + "</td>"
                + "</tr>"
        }
    }

}

function voltar() {
    document.querySelector(".montarLista").style.display = "flex";
    document.querySelector(".lista").style.display = "none";
}
function voltarLista() {
    document.querySelector(".lista").style.display = "flex";
    document.querySelector(".editarLista").style.display = "none";
}

function telaEditar(n, j) {
    document.querySelector(".editarLista").style.display = "flex";
    document.querySelector(".lista").style.display = "none";
    // pega o alimento e coloca na pagina
    var eAlimento = document.getElementById("eAlimento").value = categoria[n].itens[j];
    //exclui o alimento
    valorAntigo[0] = n;
    valorAntigo[1] = j;

    var eCat = document.getElementById("eCategoria");
    eCat.innerHTML = "<option value=''>Categoria</option>";
    for (let i = 0; i < categoria.length; i++) {
        if (categoria[i].nome == categoria[n].nome) {
            eCat.innerHTML += "<option value='" + categoria[i].nome + "' selected>" + categoria[i].nome + "</option>";
        } else {
            eCat.innerHTML += "<option value='" + categoria[i].nome + "'>" + categoria[i].nome + "</option>";
        }
    }
}

function atualizar() {
    var eCategoria = document.getElementById('eCategoria').value;
    var eAlimento = document.getElementById('eAlimento').value;

    categoria[valorAntigo[0]].itens.splice(valorAntigo[1], 1);
    
    for (let i = 0; i < categoria.length; i++) {
        if (eCategoria == categoria[i].nome) {
            categoria[i].itens.push(eAlimento)
        }
    }
    mostrarLista();
    document.querySelector(".editarLista").style.display = "none";
}

function excluir(n, i) {
    categoria[n].itens.splice(i, 1);
    mostrarLista();
}

function addCategoria() {
    var newCategoria = lerDados();

    if (validarCampo(newCategoria)) {
        adicionar(newCategoria);
    }

    mostrarCategorias();
}

function adicionar(newCategoria) {
    categoria.push(newCategoria);
}

function lerDados() {
    var newCategoria = {};
    newCategoria.nome = document.getElementById("nCategoria").value;

    document.getElementById("nCategoria").value = "";
    return newCategoria;
}

function validarCampo(newCategoria) {
    var msg = "";

    if (newCategoria.nome == "") {
        msg += "Digite o nome do Jogador<br>";
    }

    if (msg != "") {
        console.log("opa");
        return false;
    }
    return true;
}
