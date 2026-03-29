const adicionar = document.getElementById('adicionar');
const tarefa = document.getElementsByTagName('input')[0];
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');
const limpar = document.getElementById('limpar');

limpar.addEventListener('click', limparLista);

adicionar.addEventListener('click', juntar);



function verificarEnter(e) {
    if (e.key === 'Enter') {
        juntar();
    }
};
tarefa.addEventListener('keypress', verificarEnter);

adicionar.disabled = true;

function verificarInput() {
    if (tarefa.value.trim() !== "") {
        adicionar.disabled = false;
        return true;
    }else {
        adicionar.disabled = true;
        return false;
    }
};

tarefa.addEventListener('input', verificarInput);

function atualizarContador() {
    contador.textContent = `Total de tarefas: ${lista.children.length}`;
}

function criarLi() {
    if (tarefa.value.trim() === "") {
         return; }

    const li = document.createElement('li');
    li.textContent = tarefa.value;
    return li;

}

function criarBotaoConcluida(li) {


    const concluir = document.createElement('button');
    concluir.textContent = '⏳';
    concluir.addEventListener('click', () => {
        li.textContent = `✅ ${li.textContent}`;
        li.textContent = li.textContent.replace('⏳', '');
        concluir.remove();
        const remover = document.createElement('button');
        remover.textContent = '❌';
        remover.style.backgroundColor = '#f8110041';
        remover.addEventListener('click', () => {
            li.remove();
            atualizarContador();
    });        li.appendChild(remover);
    }); 
    return concluir;
}

function limparLista() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    atualizarContador();
}

function juntar(li, concluir) {
    li = criarLi();
    concluir = criarBotaoConcluida(li);

    li.appendChild(concluir);

    lista.appendChild(li);
        tarefa.value = "";
        adicionar.disabled = true;
    atualizarContador();


}
