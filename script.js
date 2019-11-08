function adicionar() {
    var projeto = window.document.getElementById('projeto').value;
    var stacks = window.document.getElementById('stacks').value;
    var valor = window.document.getElementById('valor').value;
    var dias = window.document.getElementById('dias').value;
    var devs = window.document.getElementById('devs').value;
    var infos = window.document.getElementById('infos');
    if (projeto.length == 0 || stacks.length == 0 || valor.length == 0 || dias.length == 0 || devs.length == 0) {
        window.alert('Para cadastrar é necessário que todos os campos sejam preenchidos!')
    } else {
        var inserir = infos.insertRow();
        var cel1 = inserir.insertCell();
        var cel2 = inserir.insertCell();
        var cel3 = inserir.insertCell();
        var cel4 = inserir.insertCell();
        var cel5 = inserir.insertCell();

        cel1.innerHTML = `${projeto}`;
        cel2.innerHTML = `${stacks}`;
        cel3.innerHTML = `${valor}`;
        cel4.innerHTML = `${dias}`;
        cel5.innerHTML = `${devs}`;
    }
}