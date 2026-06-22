import "../styles/buttons.css"
import Button from "./Button"
import Check from "../assets/check.svg"

interface IPricingCardProps {
  isPremium: boolean
  name: string
  price: number
  benefits: string[]
  tempoDesconto?: number
}

export default function PricingCard({isPremium, name, price, benefits, tempoDesconto}: IPricingCardProps) {
  return (
    <div className={`pricing-card ${isPremium ? "premium" : ""}`}>
            {isPremium && (
              <span className="bonus">
                <p>${tempoDesconto}º MÊS COM DESCONTO</p>
              </span>
            )}
            <span className="plan">
              <h3>{name}</h3>
              <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
            </span>
            <span className="price">
              <h2>{price !== 0 ? `R$ ${price.toFixed(2)}` : 'Grátis'}</h2>
              {price !== 0 && <p>/mês</p>}
            </span>
            <Button text="Pedir agora" secondary={!isPremium} key = {isPremium? "Premium" : "Free"} />
            <span className="hr" />
            {benefits.map((benefit, index) => (
              <span className="features" key={index}>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>{benefit}</p>
              </span>
            ))}
          </div>
  )
}