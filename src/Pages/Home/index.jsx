import './style.scss'
import PropTypes from 'prop-types'

function Home({
  apiDatas,
  mocksDatas,
  useApiData,
  setUseApiData,
  setCurentDatas,
}) {
  const toggleDatasSource = () => {
    if (Object.keys(apiDatas).length === 0) {
      console.log('No API datas')
      return
    }
    setUseApiData((prevStat) => !prevStat)
    setCurentDatas(useApiData ? mocksDatas : apiDatas)
    console.log('Datas source changed')
  }
  return (
    <main className="error-content">
      <h1>ACCUEIL</h1>
      <h3>Origine des données : {useApiData ? 'API' : 'MOCK'}</h3>
      <button onClick={toggleDatasSource}>CHANGE</button>
    </main>
  )
}

Home.propTypes = {
  apiDatas: PropTypes.object.isRequired,
  mocksDatas: PropTypes.object.isRequired,
  useApiData: PropTypes.bool.isRequired,
  setUseApiData: PropTypes.func.isRequired,
  setCurentDatas: PropTypes.func.isRequired,
}

export default Home
