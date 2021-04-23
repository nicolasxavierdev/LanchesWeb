// Evento 1

/* window.addEventListener('load', render)

function render() {
    let botao = document.querySelector('button#enviar')

    botao.addEventListener('click', () => {

        alert('Botão foi clicado!')
    })
} */


// Evento 2

window.addEventListener('load', render)

function render() {
    let botao = document.querySelector('#enviar')

    botao.addEventListener('click', () => {

        /*let nota1 = parseInt(prompt('Digite a primeira nota.'))
        let nota2 = parseInt(prompt('Digite a segunda nota.'))
        let nota3 = parseInt(prompt('Digite a terceira nota.'))
        let nota4 = parseInt(prompt('Digite a quarta nota.'))
        
        let media = (nota1 + nota2 + nota3 + nota4) / 4;
        
        if (media >= 6) {
            alert(`Média ${media}, parabéns! Aluno aprovado.`);
        } else if (media > 5 && media < 5.9) {
            alert(`Média ${media}, puts! Aluno será encaminhado para conselho de classe`);
        } else {
            alert(`Média ${media}, aluno reprovado.`);
        }
        })
        } */


        // Evento 3

        /* let agora = new Date()    
        alert(agora) */

        // Evento 4
        let iptNome = document.querySelector('#nome').value
        let iptSobrenome = document.querySelector('#sobrenome').value  

        alert(`O nome completo do usuario é ${iptNome} ${iptSobrenome}`)
    })
}