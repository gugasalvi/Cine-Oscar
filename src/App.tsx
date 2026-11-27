
import { useEffect, useState } from 'react'

import Header from './components/header'
import Hero from './components/hero'
import MovieList from './components/movieList'
import UpcomingMovieList from './components/upcomingMovieList'
import Footer from './components/footer'

import type { Filme } from './types'
import { filmesEmBreve } from './upcomingMovies'

import './App.css'

function App() {
  const [mostrarLancamentos, setMostrarLancamentos] = useState(true)
  const [filmes, setFilmes] = useState<Filme[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch('/movies.json')

        if (!resposta.ok) {
          throw new Error('Não foi possível carregar os filmes.')
        }

        const dados: Filme[] = await resposta.json()
        setFilmes(dados)
      } catch {
        setErro('Não foi possível carregar os filmes. Tente novamente mais tarde.')
      } finally {
        setCarregando(false)
      }
    }

    buscarFilmes()
  }, [])

  return (
    <div className="site">
      <Header />

      <main>
        <Hero />

        <section id="em-cartaz" className="container secao">
          <h2>Em cartaz</h2>

          {carregando && (
            <p className="mensagem-carregando">
              Carregando filmes...
            </p>
          )}

          {erro && (
            <p className="mensagem-erro">
              {erro}
            </p>
          )}

          {!carregando && !erro && (
            <MovieList filmes={filmes} />
          )}
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
