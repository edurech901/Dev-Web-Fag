import Header from "./components/header";
import Navigation from "./components/navigation";
import Article from "./components/article";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./style.css";

function App() {
  const post = {
    titulo: "Desenvolvendo a atividade 7 de desenvolvimento WEB",
    autor: "Eduardo",
    data: "13/04/2026",
    conteudo: [
      "No dia 13/04/2026, próximo as 11 horas da noite eu estou fazendo a atividade 07",
      "A tarefa consiste em componentizar em react o blog criado na atividade 04"
    ]
  };

  const relacionados = [
    "Atividade 1 de desenvolvimento mobile",
    "Atividade 1 de engenharia de software"
  ];

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Article post={post} />
        <Sidebar posts={relacionados} />
      </main>
      <Footer />
    </>
  );
}

export default App;