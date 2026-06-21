import "../styles/buttons.css"

interface ISolutionCardProps {
  icon: string
  alt: string
  title: string
  description: string
}

export default function SolutionCard({icon, alt, title, description}: ISolutionCardProps) {
  return (
    <div className="card">
      <span>
        <img src={icon} alt={alt} width={64} height={64} />
      </span>
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
        <hr />
      </div>
    </div>
  )
}