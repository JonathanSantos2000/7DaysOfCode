var pessoa = {
    nome: '',
    area: '',
    linguagem: '',
    especialização: '',
    maisTecnologia: []
}
var linguaPadrao = ["react", "vue", "c", "java"];

var pg = 0;
function next() {
    if (pg == 0) {
        nome = document.getElementById('name').value;
        pessoa.nome = nome[0].toUpperCase() + nome.substr(1)

        pg = 1;
    } else if (pg == 1) {
        area = document.querySelector('input[name="area"]:checked').value;
        if (area == 'front') {
            pessoa.area = "Front-End";
        } else {
            pessoa.area = "Back-End";
        }
        pg = 2;
    } else if (pg == 2) {
        if (pessoa.area == "Front-End") {
            lingua = document.querySelector('input[name="linguage_front"]:checked').value;
        } else {
            lingua = document.querySelector('input[name="linguage_back"]:checked').value;
        }
        for (let i = 0; i < linguaPadrao.length; i++) {
            if (linguaPadrao[i] == lingua) {
                pessoa.linguagem = lingua[0].toUpperCase() + lingua.substr(1);
            }
        }
        pg = 3;
    } else if (pg == 3) {
        especialização = document.querySelector('input[name="linguage_front"]:checked').value;
        if (especialização) {
            pessoa.especialização = "Especializar na área escolhida";
        } else {
            pessoa.especialização = especialização[0].toUpperCase() + especialização.substr(1);
        }
        pg = 4;
    }
    proximaPg();
}
function proximaPg() {

    if (pg == 1) {
        document.querySelector(".pt2_FrOrBa").style.display = "flex";
        document.querySelector(".pt1_inicio").style.display = "none";
        var contexto_pt1 = document.getElementById("contexto_pt1");
        contexto_pt1.innerHTML = "IAE " + pessoa.nome + ", Tudo bom.<br>Deseja trabalhar em qual area?";
        /*          */
    } else if (pg == 2) {
        document.querySelector(".pt3").style.display = "flex";
        document.querySelector(".pt2_FrOrBa").style.display = "none";

        var contexto_pt2 = document.getElementById("contexto_pt2");

        contexto_pt2.innerHTML = "IAE " + pessoa.nome + ".<br>Já que deseja trabalhar na area de " + pessoa.area + ","
            + " qual dessa linguagem de exemplo deseja seguir ?";

        if (pessoa.area == "Front-End") {
            document.querySelector(".pt3_1_Front").style.display = "flex";
        } else {
            document.querySelector(".pt3_2_Back").style.display = "flex";
        }
    } else if (pg == 3) {
        document.querySelector(".pt4_Profissionalizar").style.display = "flex";
        document.querySelector(".pt3").style.display = "none";

        var contexto_pt3 = document.getElementById("contexto_pt3");
        contexto_pt3.innerHTML = "IAE " + pessoa.nome + ".<br>Já que deseja trabalhar na area de " + pessoa.area + ","
            + "com a linguagem de " + pessoa.linguagem + ". <br>"
            + "Qual desses tipos de Profissional você gostaria de ser?";
    } else if (pg == 4) {
        document.querySelector(".pt5_perfil").style.display = "flex";
        document.querySelector(".pt4_Profissionalizar").style.display = "none";

        var Usuario = document.getElementById("Usuario");
        Usuario.innerHTML = pessoa.nome;

        var texto = document.getElementById("texto");
        texto.innerHTML = "Opa " + pessoa.nome + ".<br><br>"
            + "Pela suas respostas seu caminho á seguir na programação é na area de " + pessoa.area
            + " usando a linguagem: " + pessoa.linguagem + ", sendo um proficional com o foco " + pessoa.especialização + ".";

        var tecnologia = document.getElementById("tecnologia");

        tecnologia.innerHTML = pessoa.linguagem;
    }
}

function add() {
    newTec = document.getElementById('mTecnologia').value;
    pessoa.maisTecnologia.push(newTec);
    imprimir();
}

function imprimir() {
    var tecnologia = document.getElementById("tecnologia");
    console.log(tecnologia);
    tecnologia.innerHTML = "<li>" + pessoa.linguagem + "</li>";

    for (let i = 0; i < pessoa.maisTecnologia.length; i++) {
        tecnologia.innerHTML += "<li>" + pessoa.maisTecnologia[i] + "</li>";
    }
}