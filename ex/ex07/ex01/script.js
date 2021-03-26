const inicio = document.getElementById('start')
const fim = document.getElementById('end')
const passo = document.getElementById('pass')
const res = document.getElementById('res')
const c = inicio
for (c = inicio; c <= fim; passo) {
    res.style.textAlign = 'center'
    res.innerHTML = `Calculando... ${inicio}, ${passo} ${fim}`
}