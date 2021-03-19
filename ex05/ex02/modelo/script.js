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
        if (sex[0].checked) {
            genero = 'Homem'
        } else if (sex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Idade calculada ${idade}, seu genero é ${genero}`
    }
}
const data = new Date()
const dataAtual = data.getDay()
console.log(dataAtual)

