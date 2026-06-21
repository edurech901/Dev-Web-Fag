import { useState } from "react";
import "./style.css";
function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  function adicionarTarefa(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    const novaTarefa = {
      text: input
    };

    setTarefas([...tarefas, novaTarefa]);

    setInput("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <form onSubmit={adicionarTarefa} className="container-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;