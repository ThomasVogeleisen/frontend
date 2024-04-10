import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'
import Routeur from './components/Routeur'
// import { callApi } from './callApi'
// import { mockedData } from './mocks/mocks'

// const datas = await callApi('12')
// console.log(datas)
// console.log(mockedData.user18.info)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routeur />
  </React.StrictMode>
)
