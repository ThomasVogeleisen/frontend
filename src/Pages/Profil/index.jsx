import './style.scss'
import HeaderProfil from '../../components/HeaderProfil'
import Activite from '../../components/Activite'
import Score from '../../components/Score'
import AverageSession from '../../components/AverageSession'
import Intensity from '../../components/Intensity'
import Counter from '../../components/Counter'
import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import PropTypes from 'prop-types'

function Profil({ curentDatas }) {
  return (
    <main className="page-profil">
      <HeaderProfil curentDatas={curentDatas} />
      <div className="content">
        <section className="content-left">
          <div className="content-left-top">
            <Activite curentDatas={curentDatas} />
          </div>
          <div className="content-left-bottom">
            <div className="graph-content">
              <AverageSession curentDatas={curentDatas} />
            </div>
            <div className="graph-content">
              <Intensity curentDatas={curentDatas} />
            </div>
            <div className="graph-content">
              <Score curentDatas={curentDatas} />
            </div>
          </div>
        </section>
        <section className="content-right">
          <Counter
            name="Calories"
            value={curentDatas.keyData.calories}
            picture={caloriesIcon}
            units="KCal"
          />
          <Counter
            name="Proteines"
            value={curentDatas.keyData.proteines}
            picture={proteinIcon}
            units="g"
          />
          <Counter
            name="Glucides"
            value={curentDatas.keyData.glucides}
            picture={carbsIcon}
            units="g"
          />
          <Counter
            name="Lipides"
            value={curentDatas.keyData.lipides}
            picture={fatIcon}
            units="g"
          />
        </section>
      </div>
    </main>
  )
}

Profil.propTypes = {
  curentDatas: PropTypes.object.isRequired,
}

export default Profil
