// Evento 1

/* window.addEventListener('load', render)

function render() {
    let botao = document.querySelector('button#enviar')

    botao.addEventListener('click', () => {

        alert('Botão foi clicado!')
    })
} */


// Evento 2

/* window.addEventListener('load', render)

function render() {
    let botao = document.querySelector('#enviar')

    botao.addEventListener('click', () => { */

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

        /*let agora = new Date()
        alert(agora) */

        // Evento 4
        /* let iptNome = document.querySelector('#nome').value
        let iptSobrenome = document.querySelector('#sobrenome').value  

        alert(`O nome completo do usuario é ${iptNome} ${iptSobrenome}`)  */

        // Evevnto 5

        /*let res = document.querySelector('#resultado')

        let reshtml = `
            <div>
                <h1>Título</h1>
                <p>Parágrafo</p>
            </div>
            `

        res.innerHTML = reshtml */

        // Evento 6

        /* let iptNome = document.querySelector('#nome').value

        let iptSobrenome = document.querySelector('#sobrenome').value

        document.querySelector('#resultado').innerHTML = `O nome completo do usuario é ${iptNome}  ${iptSobrenome}`   */


        // Evento 7
/* 
        let iptNome = document.querySelector('#cNo').value

        let iptEmail = document.querySelector('#cEma').value

        let iptCPF = document.querySelector('#cCpf').value

        let iptDTN = document.querySelector('#cDTN').value

        document.querySelector('#resultado').innerHTML = 
        `<div>
            <table border="0" cellpadding="10" cellspasing="10">
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>CPF</th>
                    <th>Data de Nascimento</th>
                </tr>
                <tr>
                    <td>${iptNome}</td>
                    <td>${iptEmail}</td>
                    <td>${ iptCPF }</td>
                    <td>${iptDTN}</td>
                </tr>
            </table>
        </div>` 
    })
} */

//[API]GET 1

window.addEventListener('load', render)

function render() {
    retornarUsuarios()
}

async function retornarUsuarios() {
    let usuarios = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
    let listaDeUsuarios = await usuarios.json()
    let listaFinalizada = listaDeUsuarios.results

    let masculino = listaFinalizada.filter(usuario => usuario.gender == 'male')
    let feminino = listaFinalizada.filter(usuario => usuario.gender == 'female')

    console.log(masculino);
    console.log(feminino);
}