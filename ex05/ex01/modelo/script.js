function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('foto')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 18 && hora < 6) {
        img.src = "noite.jpg"
    } else if (hora >= 6 && hora < 12) {
        img.src = "manha.jpg"
    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.jpg"
    }
}

