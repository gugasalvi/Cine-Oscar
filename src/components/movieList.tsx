
import type { Filme } from '../types'
import MovieCard from './movieCard'

type MovieListProps = {
  filmes: Filme[]
}

function MovieList({ filmes }: MovieListProps) {
  return (
    <div className="lista-filmes">
      {filmes.map((filme) => (
        <MovieCard key={filme.id} filme={filme} />
      ))}
    </div>
  )
}

export default MovieList
