
import eclipseVermelho from '../assets/posters/eclipse-vermelho.png'

function Hero() {
  return (
    <section id="inicio" className="container destaque">
      <div className="destaque-texto">
        <p className="subtitulo">Destaque</p>
        <h1>Eclipse Vermelho</h1>

        <p>
          Quando o céu muda de cor, segredos do passado voltam à
          superfície. Uma história de escolhas, coragem e mistério.
        </p>
      </div>

      <img
        src={eclipseVermelho}
        alt="Pôster do filme Eclipse Vermelho"
        className="imagem-destaque"
      />
    </section>
  )
}

export default Hero
