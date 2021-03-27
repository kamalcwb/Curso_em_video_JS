var c = 1
while (c <= 6) {
    console.log('olá')
    c++
}
for (d = 1; d <= 10; d++) {
    console.log('eae')
}

//Variaveis compostas
const nome1 = 'kamal'
const nome2 = 'kaminski'
const nome3 = 'livia'
const nome4 = 'enzo'

const nome = ['kamal', 'kaminski', 'livia', 'enzo']

//nome3 = nome[2]
nome[4] = 'Alice' //adiciona 'Alice' a posição 4 do array
nome.push('Livinha') // adiciona 'Livinha' ao final do array
nome.length //Verifica o tamanho da array
nome.sort() //Coloca os elementos da Array em ordem crescente

for (let i = 0; i < nome.length; i++) {
    console.log(`O nome é ${nome[i]}`)
}

for (let i in nome) {
    console.log(`o nome é ${nome[i]}`)
}

nome.indexOf('kamal') //retorna o index onde 'kamal' está

//Funçoes
const n0 = 4
function paripm(n) {
    if (n % 2 == 0) {
        return 'O número é par'
    } else {
        console.log('O numero é impar')
    }
}
paripm(n0)
const res = paripm(5)
console.log(res)

function fatorial(n) {
    let f = 1
    for (let c = n; c > 1; c--) {
        f *= c
    }
    return f
}
console.log(fatorial(5))

function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial2(n - 1)
    }
}

console.log(fatorial2(5))

const nomezin = 'kamal'
let nomezaum = nomezin.toUpperCase
console.log(nomezaum)