function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = "#7fffd4"
        img.src = "./img/manha.jpg"
    } else if (hora >= 12 && hora < 18) {
        img.src = "./img/tarde.jpg"
        document.body.style.background = "#d9db4e"
    } else if (hora >= 18 && hora <= 23) {
        img.src = "./img/noite.jpg"
        document.body.style.background = "#060997"
    }
}

