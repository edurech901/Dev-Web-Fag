import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/solution.css";
import Button from "../components/Button";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import HeroRectangleOne from "../assets/rectangleOne.png";
import HeroRectangleTwo from "../assets/rectangleTwo.png";
import Champion from "../assets/champion.svg";
import ProfileImageOne from "../assets/profile_picture.svg";
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
  return (

    useEffect(() => {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = showMobileMenu ? "hidden" : "auto";
      }
    }, [showMobileMenu]),

  <>
    <header className="container py-sm">
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo" width={220} height={80} />
        <div className="desktop-only">
          <ul className="flex gap-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#solution">Soluções</a>
            </li>
            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li>
              <a href="#pricing">Preços</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
        <div className="desktop-only">
          <div className="flex items-center">
            <a className="reverse-color" href="">Login</a>
            <span className="ml-lg"></span>
            <Button text="Cadastre-se" />
          </div>
        </div>
        <div className="mobile-menu">
          {showMobileMenu ?
            <div className="mobile-menu-content">
              <div className="container flex">
                <ul>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                  </li>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                  </li>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                  </li>
                  <li>
                    <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a>
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
          Olá
        </p>
        <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
        <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
        </p>
        <div className="flex gap-1">
          <span><Button text="Cadastre-se" /></span>
          <span className="desktop-only">
            <Button text="Veja mais" secondary />
          </span>
        </div>
      </div>
    </section>
    <section className="container" id="solution">
      <header>
        <span>
          <h2>Soluções</h2>
          <span className="desktop-only">
            <h2>
              Sob medida para você
            </h2>
          </span>
        </span>
        <p>
          Inovação é com a gente! A <strong>DonaFrost </strong>
          já conquistou diversos clientes, seja você mais um deles,
          veja tudo que pode ganhar com nossos serviços.
        </p>
      </header>
      <section className="even-columns">
        <SolutionCard icon={Champion} alt="ícone campeão" title="Produto Vencedor" description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage." />
        <SolutionCard icon={Champion} alt="ícone campeão" title="Produto Vencedor" description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage." />
        <SolutionCard icon={Champion} alt="ícone campeão" title="Produto Vencedor" description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage." />
      </section>
    </section>
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only">
            Conselho de quem conhece
          </p>
          <h2>Cada cliente importa!</h2>
        </span>
        <p>
          Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
          comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
        </p>
      </header>
      <section className="carousel">
        <div className="carousel-content">
          <TestimonialCard
            name="Ellon Ma"
            position="CEO BING CHILLING"
            avaliation="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            profileImage={ProfileImageOne}
            qtdStars={4}
          />
          <TestimonialCard
            name="Ellon Ma"
            position="CEO BING CHILLING"
            avaliation="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            profileImage={ProfileImageOne}
            qtdStars={3}
          />
          <TestimonialCard
            name="Ellon Ma"
            position="CEO BING CHILLING"
            avaliation="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            profileImage={ProfileImageOne}
            qtdStars={2}
          />
        </div>
      </section>
    </section>
    <section id="pricing" className="container">
      <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
      </header>
      <section className="even-columns gap-1.5">
        <PricingCard isPremium={false} name="Free" price={0} benefits={["Retirada na loja", "Apenas 1 por CPF"]} />
        <PricingCard isPremium={false} name="Free" price={20} benefits={["Retirada na loja", "Apenas 1 por CPF"]} />
        <PricingCard isPremium={true} name="Premium" price={29.90} benefits={["Entrega grátis", "Desconto em parceiros", "Receitas exclusivas"]} tempoDesconto={1} />
      </section>
    </section>
    <Contact />
    <Footer />
  </>
  )
}
