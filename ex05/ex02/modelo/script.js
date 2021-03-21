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
            } else {
                //idoso
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                //criança
            } else if (idade > 13 && idade <= 50) {
                //jovem
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade calculada ${idade}, seu genero é ${genero}`
    }
}
const data = new Date()
const dataAtual = data.getDay()
console.log(dataAtual)

