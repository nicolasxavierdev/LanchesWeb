// Evento 8

window.addEventListener('load', render)

function render() {
    let form = document.querySelector('#form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let botao = document.querySelector('#enviar')

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
                    <td>${iptCPF}</td>
                    <td>${iptDTN}</td>
                </tr>
            </table>
        </div>`

    })

}