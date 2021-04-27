window.addEventListener('load', render)

function render() {
    let form = document.querySelector('#form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let iptNome = document.querySelector('#cNo').value

        let iptEmail = document.querySelector('#cEma').value

        let iptAssunto = document.querySelector('#cAssunto').value

        let iptMensagem = document.querySelector('#cMensagem').value

        document.querySelector('#resultado').innerHTML =
        `<div>
            <h2>Dados Enviados</h2>
            <table border="0" cellpadding="10" cellspasing="10">
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Assunto</th>
                    <th>Mensagem</th>
                </tr>
                <tr>
                    <td>${iptNome}</td>
                    <td>${iptEmail}</td>
                    <td>${iptAssunto}</td>
                    <td>${iptMensagem}</td>
                </tr>
            </table>
        </div>`

    })
}