function tabuada() {
    // let num para pegar um número
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        // A variável n vai ser o número que será digitado
        let n = Number(num.value)
        let c = 1
        // Colocado para mostrar uma tabuada por vez, toda vez que for digitado outro número vai limpar o anterior
        tab.innerHTML = ''
        // O while pega c <= 10 porque a tabuada vai de 1 até 10
        while (c <= 10) {
            // Criando elementos dentro do select
            let item = document.createElement('option')
            // Dentro de cada item vai ser feita a multiplicação n*c
            item.text = `${n} x ${c} = ${n*c}`
            // Para saber qual item foi selecionado. Cada linha da tabuada é um tab. Isso é mais útil para outras linguagens.
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}