const primeiroNome = "Mario";
const sobrenome = "MM";
const apelido = "";
if (!sobrenome && !apelido) {
    console.log(primeiroNome)
}
else if (!sobrenome && !primeiroNome) {
    console.log(apelido)
}
else if (!apelido) {
    console.log(primeiroNome + sobrenome)
}