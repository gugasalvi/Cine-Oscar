
import type { FilmeEmBreve } from '../types'

type UpcomingMovieCardProps = {
  filme: FilmeEmBreve
}

function UpcomingMovieCard({ filme }: UpcomingMovieCardProps) {
  return (
    <article className="filme">
      <img
        src={filme.imagem}
        alt={filme.titulo}
        className="capa-filme"
      />

      <h3>{filme.titulo}</h3>
      <p>{filme.genero}</p>
      <p>Estreia: {filme.dataLancamento}</p>
    </article>
  )
}

export default UpcomingMovieCard
