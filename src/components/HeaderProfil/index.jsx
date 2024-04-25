import './style.scss'

function HeaderProfil({ curentDatas }) {
  return (
    <>
      <h1 className="profil-title">
        Bonjour <span>{curentDatas.name}</span>
      </h1>
      <p className="profil-subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </>
  )
}

export default HeaderProfil
