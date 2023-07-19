
const rendaMensalEmCentavos = 200000;
let valor_da_parcela = (rendaMensalEmCentavos * 18) / 100
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;
if (mesesDecorridos > 60 || totalJaPagoPeloAluno === 1800000) {
    console.log('Não deve mais nada')
}
else {
    console.log(`  O valor da parcela desse mês é R$ ${valor_da_parcela / 100} reais`)
}
