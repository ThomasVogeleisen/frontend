import './style.scss'
import { useParams } from 'react-router-dom'
import HeaderProfil from '../../components/HeaderProfil'
import Activite from '../../components/Activite'
import Score from '../../components/Score'
import AverageSession from '../../components/AverageSession'
import Intensity from '../../components/Intensity'
import Counter from '../../components/Counter'
import { selectApiOrMock } from '../../utils/selectApiOrMock'
import caloriesIcon from '../../assets/calories-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'

function Profil() {
  const { id } = useParams()
  const userDatas = selectApiOrMock(id)
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
          <Counter
            name="Calories"
            value={userDatas.keyData.calories}
            picture={caloriesIcon}
            units="KCal"
          />
          <Counter
            name="Proteines"
            value={userDatas.keyData.proteines}
            picture={proteinIcon}
            units="g"
          />
          <Counter
            name="Glucides"
            value={userDatas.keyData.glucides}
            picture={carbsIcon}
            units="g"
          />
          <Counter
            name="Lipides"
            value={userDatas.keyData.lipides}
            picture={fatIcon}
            units="g"
          />
        </div>
      </div>
    </main>
  )
}

export default Profil
