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

function Profil({ curentDatas }) {
  return (
    <main className="page-profil">
      <HeaderProfil curentDatas={curentDatas} />
      <div className="content">
        <div className="content-left">
          <div className="content-left-top">
            <Activite curentDatas={curentDatas} />
          </div>
          <div className="content-left-bottom">
            <AverageSession curentDatas={curentDatas} />
            <Intensity curentDatas={curentDatas} />
            <Score curentDatas={curentDatas} />
          </div>
        </div>
        <div className="content-right">
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
        </div>
      </div>
    </main>
  )
}

export default Profil
