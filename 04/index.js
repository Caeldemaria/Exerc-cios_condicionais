const ladoA = 3;
const ladoB = 3;
let bucha = ladoA && ladoB
if (bucha === 0) {
    console.log('branco')
}
else if (bucha === 1) {
    console.log('ás')
}
else if (bucha === 2) {
    console.log('duque')
}
else if (bucha === 3) {
    console.log('terno')
}
else if (bucha === 4) {
    console.log('quadra')
}
else if (bucha === 5) {
    console.log('quinta')
}
else if (bucha === 6) {
    console.log('sena')
}
else {
    console.log('não é bucha')
}