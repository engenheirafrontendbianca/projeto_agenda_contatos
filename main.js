const form = document.getElementById('form-NomeDeContato');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById("Nome-Contato");
    const inputNumTelefone = document.getElementById('Numero-Telefone');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(parseFloat(inputNumTelefone.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumTelefone.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
