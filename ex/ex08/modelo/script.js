let num = document.getElementById('txtn')
let lista = document.getElementById('txts')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Digite um valor entre 1 e 100')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}
