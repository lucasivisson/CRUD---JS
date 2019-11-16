var nome = window.document.getElementById('projeto');
var stacks = window.document.getElementById('stacks');
var valor = window.document.getElementById('valor');
var dias = window.document.getElementById('dias');
var devs = window.document.getElementById('devs');
var infos = window.document.getElementById('infos');
var botaoadd = window.document.getElementById('botao');
let selectRow = null;
let selectv = null;
var c = 0;
var k = 0;
var v2 = null;
var v = null;
function coletaInfo() {
    let nome = window.document.getElementById('projeto').value;
    let stacks = window.document.getElementById('stacks').value;
    let valor = window.document.getElementById('valor').value;
    let dias = window.document.getElementById('dias').value;
    let devs = window.document.getElementById('devs').value;
    return {
        nome,
        stacks,
        valor,
        dias,
        devs,
    };
}
function verificar(projeto) {
    if (
        projeto.nome == '' ||
        projeto.stacks == '' ||
        projeto.valor == '' ||
        projeto.dias == '' ||
        projeto.devs == '') {
        return true;
    } else {
        return false;
    }
}
function igual(projeto) {
    for (var i = 0; i < infos.rows.length; i++) {
        if (projeto.nome == infos.rows[i].cells[0].innerText &&
            projeto.stacks == infos.rows[i].cells[1].innerText &&
            Number(projeto.valor) == Number(infos.rows[i].cells[2].innerText) &&
            Number(projeto.dias) == Number(infos.rows[i].cells[3].innerText) &&
            projeto.devs == infos.rows[i].cells[4].innerText) {
            return true;
        } else {
            return false;
        }
    }
}
function adicionar() {
    let projeto = coletaInfo();
    if (verificar(projeto) || igual(projeto)) {
        window.alert('[ERRO] Projeto já existente ou algum campo não foi preenchido!');
    } else {
        let inserir = infos.insertRow();
        let cel1 = inserir.insertCell();
        let cel2 = inserir.insertCell();
        let cel3 = inserir.insertCell();
        let cel4 = inserir.insertCell();
        let cel5 = inserir.insertCell();
        let cel6 = inserir.insertCell();

        cel1.innerHTML = `${projeto.nome}`;
        cel2.innerHTML = `${projeto.stacks}`;
        cel3.innerHTML = `${projeto.valor}`;
        cel4.innerHTML = `${projeto.dias}`;
        cel5.innerHTML = `${projeto.devs}`;

        let btn1 = document.createElement('input');
        btn1.setAttribute('id', 'botao1');
        btn1.setAttribute('type', 'button');
        btn1.setAttribute('value', 'editar');
        btn1.setAttribute('onclick', 'editar(this)');
        let btn2 = document.createElement('input');
        btn2.setAttribute('id', 'botao2');
        btn2.setAttribute('type', 'button');
        btn2.setAttribute('value', 'excluir');
        btn2.setAttribute('onclick', 'excluir(this)');
        cel6.appendChild(btn1);
        cel6.appendChild(btn2);

        limpar();
        soma();
    }
}
function soma() {
    let total = 0;
    let porcentagem = 0;
    for (let i = 0; i < infos.rows.length; i++) {
        total += Number(infos.rows[i].cells[2].innerText);
        console.log(total);
        porcentagem += (total * 100) / 27000;
    }
    var resultfat = window.document.getElementsByClassName('resultfat')[0];
    var resultproj = window.document.getElementsByClassName('resultproj')[0];
    var resultporcent = window.document.getElementsByClassName('resultporcent')[0];
    resultfat.innerHTML = `${total.toFixed(1)}/27000`;
    resultporcent.innerHTML = `${porcentagem.toFixed(2)}%`;
    resultproj.innerHTML = `${infos.rows.length}/18`
}
function limpar() {
    nome.value = '';
    stacks.value = '';
    valor.value = '';
    dias.value = '';
    devs.value = '';
    nome.focus()
}
function excluir(bot) {
    var confirm = window.confirm('Tem certeza que deseja excluir esse projeto?');
    if (confirm) {
        selectrow = bot.parentElement.parentElement;
        selectrow.parentNode.removeChild(selectrow);
        soma();
    }
}
function editar(bot) {
    selectrow = bot.parentElement.parentElement;
    selectcel1 = selectrow.cells[0].innerHTML;
    selectcel2 = selectrow.cells[1].innerHTML;
    selectcel3 = selectrow.cells[2].innerHTML;
    selectcel4 = selectrow.cells[3].innerHTML;
    selectcel5 = selectrow.cells[4].innerHTML;
    nome.value = selectcel1;
    stacks.value = selectcel2;
    valor.value = selectcel3;
    dias.value = selectcel4;
    devs.value = selectcel5;

    botaoadd.style.display = "none";

    botao();
    botao2();
}
function botao() {
    c++;
    if (c == 1) {
        console.log(c);
        let btn3 = document.createElement('input');
        var form = window.document.getElementById('tab1');
        btn3.setAttribute('id', 'botao3');
        btn3.setAttribute('type', 'button');
        btn3.setAttribute('value', 'Concluir');
        btn3.setAttribute('onclick', 'editarmsm(selectrow)');
        form.appendChild(btn3);
        v = window.document.getElementById('botao3');
    } else {
        v.style.display = "inline-block";
    }
}
function botao2() {
    k++;
    if (k == 1) {
        let btn4 = document.createElement('input');
        var form = window.document.getElementById('tab1');
        btn4.setAttribute('id', 'botao4');
        btn4.setAttribute('type', 'button');
        btn4.setAttribute('value', 'Cancelar');
        btn4.setAttribute('onclick', 'cancelar()');
        form.appendChild(btn4);
        v2 = window.document.getElementById('botao4');
    } else {
        v2.style.display = "inline-block";
    }
}
function editarmsm(r) {
    if (nome.value == '' || stacks.value == '' || valor.value == '' || dias.value == '' || devs.value == '') {
        window.alert('Preencha todos os campos para poder editar!')
    } else {
        selectcel1 = r.cells[0];
        selectcel2 = r.cells[1];
        selectcel3 = r.cells[2];
        selectcel4 = r.cells[3];
        selectcel5 = r.cells[4];

        selectcel1.innerHTML = `${nome.value}`;
        selectcel2.innerHTML = `${stacks.value}`;
        selectcel3.innerHTML = `${valor.value}`;
        selectcel4.innerHTML = `${dias.value}`;
        selectcel5.innerHTML = `${devs.value}`;

        v.style.display = "none";
        v2.style.display = "none";
        botaoadd.style.display = "block";

        soma();
        limpar();
    }
}
function cancelar() {
    limpar();
    v.style.display = "none";
    v2.style.display = "none";
    botaoadd.style.display = "block";
}