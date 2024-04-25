import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../Header'
import Aside from '../Aside'
import Home from '../../Pages/Home'
import Profil from '../../Pages/Profil'
import Error from '../../Pages/Error'
import { callApi } from '../../utils/callApi'
import { formatDatas } from '../../utils/formatDatas'
import { mockedData } from '../../mocks/mocks'
import './style.scss'

function Routeur() {
  const [apiDatas, setApiDatas] = useState({})
  const [mocksDatas, setMocksDatas] = useState({})
  const [curentDatas, setCurentDatas] = useState(formatDatas(mockedData.user18))
  const [useApiData, setUseApiData] = useState(false)

  useEffect(() => {
    setMocksDatas(formatDatas(mockedData.user18))
    const apiUrl = 'http://localhost:3000/user/'
    async function fetchData() {
      const apiUserDatas = {
        info: await callApi(apiUrl, '12'),
        activity: await callApi(apiUrl, '12/activity'),
        average_sessions: await callApi(apiUrl, '12/average-sessions'),
        performance: await callApi(apiUrl, '12/performance'),
      }
      if (!apiUserDatas.info) {
        return
      }
      setApiDatas(formatDatas(apiUserDatas))
    }
    fetchData()
  }, [])

  return (
    <Router>
      <Header />
      <div className="app-content">
        <Aside />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                apiDatas={apiDatas}
                mocksDatas={mocksDatas}
                useApiData={useApiData}
                setUseApiData={setUseApiData}
                setCurentDatas={setCurentDatas}
              />
            }
          />
          <Route
            path="/profil"
            element={<Profil curentDatas={curentDatas} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Routeur
