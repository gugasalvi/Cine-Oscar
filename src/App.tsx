
import eclipseVermelho from './assets/posters/eclipse-vermelho.png'
import ultimaSessao from './assets/posters/a-ultima-sessao.png'
import ponteMarte from './assets/posters/ponte-para-marte.png'
import noiteFarol from './assets/posters/noite-no-farol.png'
import jardimVidro from './assets/posters/o-jardim-de-vidro.png'
import rota66 from './assets/posters/rota-66-sul.png'
import sombrasCerrado from './assets/posters/sombras-do-cerrado.png'

import entreMontanhas from './assets/posters/entre-montanhas.png'
import cidadeSilenciosa from './assets/posters/a-cidade-silenciosa.png'
import terceiraMargem from './assets/posters/terceira-margem.png'
import ladoOculto from './assets/posters/o-lado-oculto.png'
import alemTempo from './assets/posters/alem-do-tempo.png'
import raizesPerdidas from './assets/posters/raizes-perdidas.png'

import './App.css'

function App() {
  return (
    <div className="site">
      <header className="cabecalho">
        <div className="container cabecalho-conteudo">
          <span className="logo">
            CINE OSCAR
          </span>

          <nav aria-label="Navegação principal">
            <ul className="menu">
              <li><span>Início</span></li>
              <li><span>Em cartaz</span></li>
              <li><span>Em breve</span></li>
              <li><span>Contato</span></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
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

        <section id="em-cartaz" className="container secao">
          <h2>Em cartaz</h2>

          <div className="lista-filmes">
            <article className="filme">
              <img
                src={ultimaSessao}
                alt="Pôster do filme A Última Sessão"
                className="capa-filme"
              />
              <h3>A Última Sessão</h3>
              <p>Drama</p>
              <p>Duração: 1h 52min</p>
            </article>

            <article className="filme">
              <img
                src={ponteMarte}
                alt="Pôster do filme Ponte para Marte"
                className="capa-filme"
              />
              <h3>Ponte para Marte</h3>
              <p>Ficção científica</p>
              <p>Duração: 2h 05min</p>
            </article>

            <article className="filme">
              <img
                src={noiteFarol}
                alt="Pôster do filme Noite no Farol"
                className="capa-filme"
              />
              <h3>Noite no Farol</h3>
              <p>Suspense</p>
              <p>Duração: 1h 50min</p>
            </article>

            <article className="filme">
              <img
                src={eclipseVermelho}
                alt="Pôster do filme Eclipse Vermelho"
                className="capa-filme"
              />
              <h3>Eclipse Vermelho</h3>
              <p>Drama</p>
              <p>Duração: 1h 48min</p>
            </article>

            <article className="filme">
              <img
                src={entreMontanhas}
                alt="Pôster do filme Entre Montanhas"
                className="capa-filme"
              />
              <h3>Entre Montanhas</h3>
              <p>Aventura</p>
              <p>Duração: 1h 47min</p>
            </article>

            <article className="filme">
              <img
                src={cidadeSilenciosa}
                alt="Pôster do filme A Cidade Silenciosa"
                className="capa-filme"
              />
              <h3>A Cidade Silenciosa</h3>
              <p>Suspense</p>
              <p>Duração: 1h 49min</p>
            </article>

            <article className="filme">
              <img
                src={terceiraMargem}
                alt="Pôster do filme Terceira Margem"
                className="capa-filme"
              />
              <h3>Terceira Margem</h3>
              <p>Drama</p>
              <p>Duração: 1h 46min</p>
            </article>

            <article className="filme">
              <img
                src={ladoOculto}
                alt="Pôster do filme O Lado Oculto"
                className="capa-filme"
              />
              <h3>O Lado Oculto</h3>
              <p>Suspense</p>
              <p>Duração: 1h 43min</p>
            </article>

            <article className="filme">
              <img
                src={alemTempo}
                alt="Pôster do filme Além do Tempo"
                className="capa-filme"
              />
              <h3>Além do Tempo</h3>
              <p>Ficção científica</p>
              <p>Duração: 2h 03min</p>
            </article>

            <article className="filme">
              <img
                src={raizesPerdidas}
                alt="Pôster do filme Raízes Perdidas"
                className="capa-filme"
              />
              <h3>Raízes Perdidas</h3>
              <p>Drama</p>
              <p>Duração: 1h 51min</p>
            </article>
          </div>
        </section>

        <section id="em-breve" className="container secao">
          <h2>Em breve</h2>

          <div className="lista-filmes">
            <article className="filme">
              <img
                src={jardimVidro}
                alt="Pôster do filme O Jardim de Vidro"
                className="capa-filme"
              />
              <h3>O Jardim de Vidro</h3>
              <p>Drama</p>
              <p>Data de lançamento: 12/11/2026</p>
            </article>

            <article className="filme">
              <img
                src={rota66}
                alt="Pôster do filme Rota 66 Sul"
                className="capa-filme"
              />
              <h3>Rota 66 Sul</h3>
              <p>Aventura</p>
              <p>Data de lançamento: 19/11/2026</p>
            </article>

            <article className="filme">
              <img
                src={sombrasCerrado}
                alt="Pôster do filme Sombras do Cerrado"
                className="capa-filme"
              />
              <h3>Sombras do Cerrado</h3>
              <p>Mistério</p>
              <p>Data de lançamento: 26/11/2026</p>
            </article>
          </div>
        </section>
      </main>

      <footer id="contato" className="rodape">
        <div className="container rodape-conteudo">
          <div>
            <h2>Cine Oscar</h2>
            <p>
              Filmes em cartaz, lançamentos e novidades do cinema.
            </p>
          </div>

          <div>
            <h3>Contato</h3>
            <p>
              E-mail:{' '}
              <a href="mailto:contato@cineoscar.com.br">
                contato@cineoscar.com.br
              </a>
            </p>
            <p>Telefone: (46) 3000-0000</p>
          </div>

          <div>
            <h3>Redes sociais</h3>
            <ul className="redes-sociais">
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
