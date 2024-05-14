function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    if (tipo.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}
function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').innerHTML);
    if (quantidade > qtdPista) {
        alert('Quantidade indisponível para espaço pista');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').innerHTML = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
    if (quantidade > qtdSuperior) {
        alert('Quantidade indisponível para espaço superior');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').innerHTML = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
    if (quantidade > qtdInferior) {
        alert('Quantidade indisponível para espaço inferior');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').innerHTML = qtdInferior;
        alert('Compra realizada com sucesso!');
    }






























}