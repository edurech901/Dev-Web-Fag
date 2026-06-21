import "../styles/buttons.css"

import Star from "../assets/star.svg"
import StarOuter from "../assets/star_outer.svg"

interface ITestimonialCardProps {
  name: string
  position: string
  avaliation: string
  profileImage: string
  qtdStars: number
}

export default function TestimonialCard({name, position, avaliation, profileImage, qtdStars }: ITestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={profileImage} alt="Imagem perfil cliente" />
      <span className="testimony">
        <p>
          {avaliation}
        </p>
      </span>
      <span className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            src={i < qtdStars ? Star : StarOuter}
            alt="ícone estrela"
            width={22}
            height={20}
          />
        ))}
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{position}</p>
      </span>
    </div>
  )
}