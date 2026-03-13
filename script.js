const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const categoryInput = document.getElementById('category')
const marcaInput = document.getElementById('marca')
const priceInput = document.getElementById('price')
const estoqueInput = document.getElementById('estoque')
const codprodutoInput = document.getElementById('codproduto')
const descproduto = document.getElementById('descproduto')
const fornecedorInput = document.getElementById('fornecedor')
const statusprodInput = document.getElementById('statusprod')
const telcontatoInput = document.getElementById('tel')




    // usei array pra agilizar o processo
    const campos = [
    { input: nameInput,       mensagem: 'Por favor, preencha o nome do produto!' },
    { input: marcaInput,      mensagem: 'Por favor, preencha a marca!' },
    { input: priceInput,      mensagem: 'Por favor, preencha o preço!' },
    { input: estoqueInput,    mensagem: 'Por favor, preencha a quantidade em estoque!' },
    { input: codprodutoInput, mensagem: 'Por favor, preencha o código do produto!' },
    {input: descproduto,      mensagem: 'Por favor, preencha a descrição do produto!'  },
    { input: fornecedorInput, mensagem: 'Por favor, preencha o fornecedor!' },
    { input: telcontatoInput, mensagem: 'Por favor, preencha o telefone de contato!' },
]


function validarCampo() {
    for (const campo of campos) {
        if (campo.input.value.trim() === '') {
            alert(campo.mensagem)
            return false
        }
    }
    return true
}

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        if (!validarCampo()) return

        alert('Obrigado. Seus dados foram salvos!')
        form.reset()
    })


