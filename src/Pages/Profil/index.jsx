import './style.scss'
import HeaderProfil from '../../components/HeaderProfil'
import Activite from '../../components/Activite'
import Score from '../../components/Score'
import AverageSession from '../../components/AverageSession'
import Intensity from '../../components/Intensity'

function Profil() {
  return (
    <main className="page-profil">
      <HeaderProfil />
      <div className="content">
        <div className="content-left">
          <div className="content-left-top">
            <Activite />
          </div>
          <div className="content-left-bottom">
            <AverageSession />
            <Intensity />
            <Score />
          </div>
        </div>
        <div className="content-right">
          <p
            style={{ backgroundColor: 'grey', width: '258px', height: '124px' }}
          >
            calories
          </p>
          <p
            style={{ backgroundColor: 'grey', width: '258px', height: '124px' }}
          >
            proteines
          </p>
          <p
            style={{ backgroundColor: 'grey', width: '258px', height: '124px' }}
          >
            glucides
          </p>
          <p
            style={{ backgroundColor: 'grey', width: '258px', height: '124px' }}
          >
            lipides
          </p>
        </div>
      </div>
    </main>
  )
}

export default Profil
