import './style.scss'
import PropTypes from 'prop-types'

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

HeaderProfil.propTypes = {
  curentDatas: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default HeaderProfil
