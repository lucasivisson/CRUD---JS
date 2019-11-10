var nome = window.document.getElementById('projeto');
var stacks = window.document.getElementById('stacks');
var valor = window.document.getElementById('valor');
var dias = window.document.getElementById('dias');
var devs = window.document.getElementById('devs');
var infos = window.document.getElementById('infos');
var resultfat = window.document.getElementsByClassName('resultfat')[0];
var resultproj = window.document.getElementsByClassName('resultproj')[0];
var resultporcent = window.document.getElementsByClassName('resultporcent');
var result = 0;
let projetos = [];
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
        projetos.push(projeto);

        let btn1 = document.createElement('input');
        btn1.setAttribute('id', 'botao1');
        btn1.setAttribute('type', 'button');
        btn1.setAttribute('value', 'editar');
        btn1.setAttribute('onclick', 'editar()');
        let btn2 = document.createElement('input');
        btn2.setAttribute('id', 'botao2');
        btn2.setAttribute('type', 'button');
        btn2.setAttribute('value', 'excluir');
        btn2.setAttribute('onclick', 'excluir()');

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
        cel6.appendChild(btn1);
        cel6.appendChild(btn2);

        var resusoma = soma(valor.value);
        var resuporcent = porcent(resusoma.value);
        resultfat.innerHTML = `${resusoma}/27000`;
        resultproj.innerHTML = `${projetos.length}/18`
        resultprocent.innerHTML = `${resuporcent}`;

        nome.value = '';
        stacks.value = '';
        valor.value = '';
        dias.value = '';
        devs.value = '';
        nome.focus()
    }
}
function soma(n1) {
    result += Number(n1);
    return result;
}
function porcent(n){
    result += (n*100)/27000;
    return result;
}
function editar() {

}
