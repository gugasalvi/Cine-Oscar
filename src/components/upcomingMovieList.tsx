
import type { FilmeEmBreve } from '../types'
import UpcomingMovieCard from './upcomingMovieCard'

type UpcomingMovieListProps = {
  filmes: FilmeEmBreve[]
}

function UpcomingMovieList({ filmes }: UpcomingMovieListProps) {
  return (
    <div className="lista-filmes">
      {filmes.map((filme) => (
        <UpcomingMovieCard key={filme.id} filme={filme} />
      ))}
    </div>
  )
}

export default UpcomingMovieList
