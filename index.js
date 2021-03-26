var c = 1
while (c <= 6) {
    console.log('olá')
    c++
}
for (d = 1; d <= 10; d++) {
    console.log('eae')
}


function verificar() {
    const ano = (document.getElementById('txtano'))
    const data = new Date()
    const dataAtual = data.getFullYear()
    const res = document.getElementById('res')
    if (ano.value.length == 0 || ano.value > dataAtual) {
        window.alert('Verifique seus dados')
    } else {
        const sex = document.getElementsByName('radgen')
        const idade = dataAtual - Number(ano.value)
        let genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                //criança
                img.setAttribute('src', './img/homem_crianca.jpg')
            } else if (idade > 13 && idade <= 50) {
                //jovem
                img.setAttribute('src', './img/homem_jovem.jpg')
            } else {
                //idoso
                img.setAttribute('src', './img/homem_idoso.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                //criança
                img.setAttribute('src', './img/mulher_crianca.jpg')
            } else if (idade > 13 && idade <= 50) {
                //jovem
                img.setAttribute('src', './img/mulher_jovem.jpg')
            } else {
                //idoso
                img.setAttribute('src', './img/mulher_idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade calculada ${idade}, seu genero é ${genero}`
        res.appendChild(img)
    }
}
const data = new Date()
const dataAtual = data.getDay()
console.log(dataAtual)