//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";
const valorDoProduto = 13000;
let desconto = 0.05
let valorFinal = valorDoProduto - (valorDoProduto * desconto)
if (tipoDePagamento === "credito") {

    console.log(`Valor a ser pago:R$ ${valorFinal / 100}`)
}

else if (tipoDePagamento === "cheque") {
    desconto = 0.03
    valorFinal = valorDoProduto - (valorDoProduto * desconto)
    console.log(`Valor a ser pago:R$ ${valorFinal / 100}`)
}
else if (tipoDePagamento === "debito" || "dinehiro") {
    desconto = 0.10
    valorFinal = valorDoProduto - (valorDoProduto * desconto)
    console.log(`Valor a ser pago:R$ ${valorFinal / 100}`)
}

