var nome = window.document.getElementById('projeto');
var stacks = window.document.getElementById('stacks');
var valor = window.document.getElementById('valor');
var dias = window.document.getElementById('dias');
var devs = window.document.getElementById('devs');
var infos = window.document.getElementById('infos');
var form = window.document.getElementById('tab1');
var table = window.document.getElementById('infos')
var resultfat = window.document.getElementsByClassName('resultfat')[0];
var resultproj = window.document.getElementsByClassName('resultproj')[0];
var resultporcent = window.document.getElementsByClassName('resultporcent')[0];
var result = 0;
var resu = 0;
var re = 0;
let selectRow = null;
let selectv = null;
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
function igual(target) {
    return false;
    //     if(projetos.length > 1) {
    //         projetos.filter(projeto => {
    //             if(projeto.name === target.name) {
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //         });
    //     }
}
function adicionar() {
    let projeto = coletaInfo();
    if (verificar(projeto) || igual(projeto)) {
        window.alert('Para cadastrar é necessário que todos os campos sejam preenchidos!')
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
function soma(){
    let total = 0;
    let porcentagem = 0;
    for(let i=0; i<infos.rows.length; i++){
        total += Number(infos.rows[i].cells[2].innerText);
        console.log(total);
        porcentagem += (total * 100) / 27000;
    }
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

    var botaoadd = window.document.getElementById('botao');
    botaoadd.style.display = "none";

    let btn3 = document.createElement('input');
    btn3.setAttribute('id', 'botao3');
    btn3.setAttribute('type', 'button');
    btn3.setAttribute('value', 'Concluir');
    btn3.setAttribute('onclick', 'editarmsm(selectrow)');
    form.appendChild(btn3);
    let btn4 = document.createElement('input');
    btn4.setAttribute('id', 'botao4');
    btn4.setAttribute('type', 'button');
    btn4.setAttribute('value', 'Cancelar');
    btn4.setAttribute('onclick', 'cancelar()');
    form.appendChild(btn4);
}
function editarmsm(r) {
    if(nome.value == '' || stacks.value == '' || valor.value == '' || dias.value == '' || devs.value == ''){
        window.alert('Preencha todos os campos para poder editar!')
    }else{
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

    limpar();
    botao3.style.display = "none";
    botao4.style.display = "none";
    botao.style.display = "block";
    soma();
    }
}
function cancelar() {
    btn3= window.document.getElementById('botao3');
    btn4= window.document.getElementById('botao4');
    btn= window.document.getElementById('botao');
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn.style.display = "block";
    limpar();
}