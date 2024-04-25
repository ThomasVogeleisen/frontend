import './style.scss'

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

export default Home
