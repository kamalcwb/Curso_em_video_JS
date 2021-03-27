function contar() {
    const ini = document.getElementById('txti')
    const fim = document.getElementById('txtf')
    const passo = document.getElementById('txtp')
    const res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO]')
    } else {
        res.innerHTML = `Contando...`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
        }
    }
}