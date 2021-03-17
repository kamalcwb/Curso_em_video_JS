const idade = 66
if (idade < 16) {
    console.log('Menor de idade, não vota!')
} else if (idade >= 16 && idade < 18 || idade > 65) {
    console.log('Menor de idade, voto é opcional')
} else {
    console.log('Maior de idade, voto obrigatório')
}