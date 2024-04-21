import './style.scss'
import logo from '../../assets/logo.png'
import logo_txt from '../../assets/logo_txt.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header-principal">
      <div className="bloc-logo">
        <img className="bloc-logo__img" src={logo} alt="Logo SportSee" />
        <img src={logo_txt} alt="SportSee" />
      </div>
      <nav className="navbar">
        <Link className="navbar__link" to="/">
          Accueil
        </Link>
        <Link className="navbar__link" to="/profil/18">
          Profil
        </Link>
        <Link className="navbar__link" to="/reglages">
          Reglage
        </Link>
        <Link className="navbar__link" to="/communaute">
          Communauté
        </Link>
      </nav>
    </header>
  )
}

export default Header
