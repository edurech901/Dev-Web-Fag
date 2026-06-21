import Instagram from "../assets/instagram.svg"
import Facebook from "../assets/facebook.svg"
import Youtube from "../assets/youtube.svg"

export default function Footer() {
  return (
    <footer id="footer">
      <section className="container footer-content">
        <div className="brand">
          <h3>LogoMarca</h3>
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
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Faça parte do time</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Funcionalidades</h3>
          <ul>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Análise de dados</a>
            </li>
            <li>
              <a href="#">Boot discord</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Recursos</h3>
          <ul>
            <li>
              <a href="#">IOS & Android</a>
            </li>
            <li>
              <a href="#">Teste a Demo</a>
            </li>
            <li>
              <a href="#">Clientes</a>
            </li>
            <li>
              <a href="#">API</a>
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
