import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solution.css";
import Button from "../components/Button";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import HeroRectangleOne from "../assets/rectangleOne.svg";
import HeroRectangleTwo from "../assets/rectangleTwo.svg";
import ProfileImageOne from "../assets/profile_picture.svg";
import Dashboard from "../assets/dashboard.svg";
import Subscription from "../assets/subscription.svg";
import Search from "../assets/search.svg";
import "../styles/hero.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";
import SolutionCard from "../components/SolutionCard";
import TestimonialCard from "../components/TestimonialCard";
import PricingCard from "../components/pricingCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
  <>
    <header className="container py-sm">
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo" width={220} height={80} />
        <div className="desktop-only">
          <ul className="flex gap-1">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#solution">Funcionalidades</a>
            </li>
            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li>
              <a href="#pricing">Planos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
        <div className="desktop-only">
          <div className="flex items-center">
            <a className="reverse-color" href="">Entrar</a>
            <span className="ml-lg"></span>
            <Button text="Criar Conta" />
          </div>
        </div>
        <div className="mobile-menu">
          {showMobileMenu ?
            <div className="mobile-menu-content">
              <div className="container flex">
                <ul>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Início</a>
                  </li>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Funcionalidades</a>
                  </li>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                  </li>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Planos</a>
                  </li>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                  </li>
                </ul>
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                  <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                </span>
              </div>
            </div>
            :
            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
              <img src={Menu} alt="ícone menu" width={24} height={24} />
            </span>
          }
        </div>
      </nav>
    </header>
    <section id="hero">
      <span className="desktop-only">
        <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
      </span>
      <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
      <div className="container content">
        <p className="desktop-only">
          Controle suas assinaturas
        </p>
        <h1>Nunca mais perca o controle das suas assinaturas digitais</h1>
        <p>Gerencie Netflix, Spotify, Disney+, cursos online, academias e qualquer serviço recorrente em um único lugar.
        </p>
        <div className="flex gap-1">
          <span><Button text="Começar Agora" /></span>
          <span className="desktop-only">
            <Button text="Conhecer Recursos" secondary />
          </span>
        </div>
      </div>
    </section>
    <section className="container" id="solution">
      <header>
        <span>
          <h2>Funcionalidades</h2>
          <span className="desktop-only">
            <h2>
              Tudo o que você precisa para organizar suas assinaturas
            </h2>
          </span>
        </span>
        <p>
          Centralize informações importantes dos seus serviços e acompanhe seus gastos de forma simples e prática.
        </p>
      </header>
      <section className="even-columns">
        <SolutionCard icon={Subscription} alt="ícone cartão" title="Gerenciamento de Assinaturas" description="Cadastre serviços digitais, informe valores, datas de cobrança e mantenha todas as informações organizadas." />
        <SolutionCard icon={Dashboard} alt="ícone dashboard" title="Dashboard Financeiro" description="Visualize rapidamente quanto está gastando por mês com todos os seus serviços recorrentes." />
        <SolutionCard icon={Search} alt="ícone busca" title="Busca e Filtros" description="Encontre assinaturas facilmente utilizando filtros por categoria ou status." />
      </section>
    </section>
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only">
            Quem utiliza recomenda
          </p>
          <h2>Organização que faz diferença</h2>
        </span>
        <p>
          Veja como o AssinaFácil ajuda usuários a acompanharem melhor seus gastos recorrentes.
        </p>
      </header>
      <section className="carousel">
        <div className="carousel-content">
          <TestimonialCard
            name="Carlos Andrade"
            position="Usuário"
            avaliation="Eu não percebia quanto gastava com assinaturas. Agora consigo visualizar tudo em segundos."
            profileImage={ProfileImageOne}
            qtdStars={5}
          />
          <TestimonialCard
            name="Mariana Silva"
            position="Usuária"
            avaliation="Consegui identificar serviços que não utilizava mais e reduzir meus gastos mensais."
            profileImage={ProfileImageOne}
            qtdStars={5}
          />
          <TestimonialCard
            name="Carlos Andrade"
            position="Usuário"
            avaliation="Eu não percebia quanto gastava com assinaturas. Agora consigo visualizar tudo em segundos."
            profileImage={ProfileImageOne}
            qtdStars={5}
          />
        </div>
      </section>
    </section>
    <section id="pricing" className="container">
      <header>
        <p className="desktop-only">Nossos Planos</p>
        <h2>Escolha o plano ideal</h2>
      </header>
      <section className="even-columns gap-1.5">
        <PricingCard isPremium={false} name="Plano Estudante" price={0} benefits={["Até 10 assinaturas", "Dashboard básico", "Filtros simples"]} />
        <PricingCard isPremium={false} name="Plano Premium" price={9.90} benefits={["Assinaturas ilimitadas", "Dashboard avançado", "Categorias personalizadas"]} />
        <PricingCard isPremium={true} name="Plano Família" price={14.90} benefits={["Perfis compartilhados", "Controle familiar", "Relatórios completos"]} tempoDesconto={1} />
      </section>
    </section>
    <Contact />
    <Footer />
  </>
  )
}
