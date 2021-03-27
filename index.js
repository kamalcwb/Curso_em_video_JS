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
