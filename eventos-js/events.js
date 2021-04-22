// Evento 1

window.addEventListener('load', render)

function render() {
    let botao = document.querySelector('button#enviar')

    botao.addEventListener('click', () => {

        alert('Botão foi clicado!')
    })
}