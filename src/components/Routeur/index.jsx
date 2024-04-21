import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Aside from '../Aside'
import Home from '../../Pages/Home'
import Profil from '../../Pages/Profil'
import Error from '../../Pages/Error'
import './style.scss'

function Routeur() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Aside />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil/:id" element={<Profil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Routeur
