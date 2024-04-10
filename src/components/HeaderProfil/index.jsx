import './style.scss'
import { mockedData } from '../../mocks/mocks'
// import { callApi } from '../../callApi'

const usersDatas = mockedData.user18.info
// const usersDatas = await callApi('18')

console.log(usersDatas.data.userInfos.firstName)

function HeaderProfil() {
  return (
    <>
      <h1 className="profil-title">
        Bonjour <span>{usersDatas.data.userInfos.firstName}</span>
      </h1>
      <p className="profil-subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  )
}

export default HeaderProfil
