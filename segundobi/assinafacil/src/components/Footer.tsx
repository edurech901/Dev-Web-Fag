import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import Youtube from "../assets/youtube.svg"

export default function Footer() {
  return (
    <footer id="footer">
      <section className="container footer-content">
        <div className="brand">
          <h3>AssinaFácil</h3>
          <span>
            <a href="#">
              <img src={Instagram} alt="Instagram" width={18} height={18} />
            </a>
            <a href="#">
              <img src={Facebook} alt="Facebook" width={18} height={18} />
            </a>
            <a href="#">
              <img src={Youtube} alt="Youtube" width={18} height={18} />
            </a>
          </span>
        </div>

        <div className="footer-column">
          <h3>Empresa</h3>
          <ul>
            <li>
              <a href="#">Sobre o AssinaFácil</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Funcionalidades</h3>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Assinaturas</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Relatórios</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Recursos</h3>
          <ul>
            <li>
              <a href="#">Central de Ajuda</a>
            </li>
            <li>
              <a href="#">Documentação</a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer-bottom">
        <p>
          Feito com amor na aula de Programação Web @2026 Sandro Mateus Ramos - Todos os
          direitos reservados.
        </p>
      </section>
    </footer>
  )
}
