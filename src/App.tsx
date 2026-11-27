
import { useState } from 'react'

import Header from './components/header'
import Hero from './components/hero'
import MovieList from './components/movieList'
import UpcomingMovieList from './components/upcomingMovieList'
import Footer from './components/footer'

import { filmes } from './movies'
import { filmesEmBreve } from './upcomingMovies'

import './App.css'

function App() {
  const [mostrarLancamentos, setMostrarLancamentos] = useState(true)

  return (
    <div className="site">
      <Header />

      <main>
        <Hero />

        <section id="em-cartaz" className="container secao">
          <h2>Em cartaz</h2>

          <MovieList filmes={filmes} />
        </section>

        <section id="em-breve" className="container secao">
          <h2>Em breve</h2>

          <button
            className="botao-lancamentos"
            onClick={() => setMostrarLancamentos(!mostrarLancamentos)}
          >
            {mostrarLancamentos
              ? 'Ocultar lançamentos'
              : 'Mostrar lançamentos'}
          </button>

          {mostrarLancamentos && (
            <UpcomingMovieList filmes={filmesEmBreve} />
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
