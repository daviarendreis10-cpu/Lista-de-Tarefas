const adicionar = document.getElementById('adicionar');
const tarefa = document.getElementsByTagName('input')[0];
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');

adicionar.addEventListener('click', adicionarTarefa);

adicionar.disabled = true;


tarefa.addEventListener('input', () => {
    if (tarefa.value.trim() !== "") {
        adicionar.disabled = false;
        return true;
    }else {
        alert("Por favor, digite uma tarefa válida.");
        adicionar.disabled = true;
        return false;
    }
});

function atualizarContador() {
    contador.textContent = `Total de tarefas: ${lista.children.length}`;
}

function adicionarTarefa() {
    if (tarefa.value.trim() === "") { return; }

    const li = document.createElement('li');
    li.textContent = tarefa.value;

    const remover = document.createElement('button');
    remover.textContent = 'Remover';
    remover.addEventListener('click', () => {
        li.remove();
        atualizarContador();
    });

    li.appendChild(remover);
    lista.appendChild(li);
        tarefa.value = "";
        adicionar.disabled = true;
    atualizarContador();

}


        