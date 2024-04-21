import './style.scss'
import { selectApiOrMock } from '../../utils/selectApiOrMock'
import { useParams } from 'react-router-dom'

function HeaderProfil() {
  const { id } = useParams()
  let userDatas = selectApiOrMock(id)
  return (
    <>
      <h1 className="profil-title">
        Bonjour <span>{userDatas.name}</span>
      </h1>
      <p className="profil-subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  )
}

export default HeaderProfil
