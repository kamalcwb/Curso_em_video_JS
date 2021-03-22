var n = '10'

while (n > 1) {
    let dias = 0
    let k = n
    while (k > 1) {
        k = k / 2
        dias = dias + 1
    }

}
console.log(`${n}kilos de comida duram ${dias} dias`)