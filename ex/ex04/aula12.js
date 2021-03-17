const idade = 66
if (idade < 16) {
    console.log('Menor de idade, não vota!')
} else if (idade >= 16 && idade < 18 || idade > 65) {
    console.log('Menor de idade, voto é opcional')
} else {
    console.log('Maior de idade, voto obrigatório')
}

const hora = 00
if (hora >= 0 && hora < 12) {
    console.log('Bom dia')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 24) {
    console.log('Boa noite')
}
