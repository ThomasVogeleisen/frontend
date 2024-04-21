import './style.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="error-content">
      <h1>ACCUEIL</h1>
      <h2>Aller sur la page profil avec</h2>
      <Link to="/profil/12">Les données API</Link>
      <br />
      <Link to="/profil/18">Les données Mockés</Link>
    </main>
  )
}

export default Home
