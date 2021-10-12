function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
        img.src = 'manha.png'
        document.body.style.background = '#E2BE99'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
        img.src = 'tarde.png'
        document.body.style.background = '#A5BDD5'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
        img.src = 'noite.png'
        document.body.style.background = '#151A2C'
    }
}
