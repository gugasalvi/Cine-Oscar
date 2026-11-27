
function Footer() {
  return (
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
  )
}

export default Footer
