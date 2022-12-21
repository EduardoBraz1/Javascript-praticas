const precoEtiqueta = 100;
const formaDePagamento = 1;

function aplicarDesconto(precoEtiqueta, desconto){
    return precoEtiqueta - (precoEtiqueta * (desconto / 100))
}

function aplicarJuros(precoEtiqueta, juros){
    return precoEtiqueta - (precoEtiqueta * (juros / 100))
}

function verificarPagamento(precoEtiqueta, formaDePagamento) {
    if (formaDePagamento === 1) {
        return aplicarDesconto(precoEtiqueta, 10);
    } else if (formaDePagamento === 2) {
        return aplicarDesconto(precoEtiqueta, 15);
    } else if (formaDePagamento === 3) {
        return precoEtiqueta;
    } else {
        return aplicarJuros(precoEtiqueta, 10);
    }
}

(function () {
    console.log(verificarPagamento(precoEtiqueta, formaDePagamento));
})();