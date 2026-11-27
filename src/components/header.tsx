
function Header() {
  return (
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
  )
}

export default Header
