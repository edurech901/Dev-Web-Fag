function adicionarTarefa() {
    let input = document.getElementById("tarefas");
    let tarefa = input.value;
    if (tarefa === '') return;

    let ul = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" onclick="concluirTarefa(this)">${tarefa}</span>
        <button class="delete-btn" onclick="removerTarefa(this)">X</button>
    `;
    ul.appendChild(li);
    input.value = "";
}

function concluirTarefa(el) {
    el.parentElement.classList.toggle("concluida");
}

function removerTarefa(el) {
    el.parentElement.remove();
}
