const idade = 10;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log("Acesso Negado")


}
else if (ehEstudante === true && idade < 18) {

    console.log('O valor que deve pagar é de R$10')

}
else {
    console.log('O valor que deve pagar é de R$20')
}