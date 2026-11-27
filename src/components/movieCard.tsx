
import type { Filme } from '../types'

type MovieCardProps = {
  filme: Filme
}

function MovieCard({ filme }: MovieCardProps) {
  return (
    <article className="filme">
      <img
        src={filme.imagem}
        alt={filme.titulo}
        className="capa-filme"
      />

      <h3>{filme.titulo}</h3>
      <p>{filme.genero}</p>
      <p>{filme.duracao}</p>
    </article>
  )
}

export default MovieCard
