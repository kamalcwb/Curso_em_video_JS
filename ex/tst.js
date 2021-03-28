/*let k = 40
var c = 1
while (k >= 1.0) {
    if (k >= 1) {
        k = k / 2
        ++c
    } else
        console.log(`${c} dias consumiram ${k}kilos`)
}
console.log(`${c} dias`)*/
/*
var n = parseFloat();
var c = 1


while (n > 1) { //complete o codigo
    //let c = 1; //atribua o valor correto a variavel
    while (n > 1) { // complete o while
         n = n / 2
         c++
    }
}
    console.log(c +` dias`); //complete o código para a saída*/

var n = parseInt();
while (n-- > 0) {
    var c = parseFloat();
    let dias = 0;
    while (c > 1) {
        c /= 2.0;
        dias++;
    }
    console.log(`${dias} dias`);
}