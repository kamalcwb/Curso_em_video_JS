function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('foto')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 18 && hora < 6) {
        msg.innerHTML = "Agora é noite"
        img.src = ""
    } else if (hora >= 6 && hora < 12) {
        msg.innerHTML = "Agora é manhã"
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = "Agora é tarde"
    }
}

