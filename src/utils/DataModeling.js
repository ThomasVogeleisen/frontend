import { mockedData } from '../mocks/mocks'
import { callApi } from './callApi'

const mockedUserDatas = {
  info: mockedData.user18.info,
  activity: mockedData.user18.activity,
  average_sessions: mockedData.user18.average_sessions,
  performance: mockedData.user18.performance,
}

const apiUserDatas = {
  info: await callApi('12'),
  activity: await callApi('12/activity'),
  average_sessions: await callApi('12/average-sessions'),
  performance: await callApi('12/performance'),
}

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const performances = [
  'Intensité',
  'Vitesse',
  'Force',
  'Endurance',
  'Energie',
  'Cardio',
]

class Modeling {
  user(datas) {
    // Modeling day for user activity
    for (let i = 0; i < datas.activity.data.sessions.length; i++) {
      datas.activity.data.sessions[i].day = i + 1
    }

    // modeling day for user average sessions
    for (let i = 0; i < datas.average_sessions.data.sessions.length; i++) {
      datas.average_sessions.data.sessions[i].day = days[i]
    }
    // modeling performances
    for (let i = 0; i < datas.performance.data.data.length; i++) {
      datas.performance.data.data[i].kind = performances[i]
    }

    // Modeling Score
    if (!datas.info.data.score && datas.info.data.todayScore) {
      datas.info.data.score = datas.info.data.todayScore
    }

    return {
      name: datas.info.data.userInfos.firstName,
      score: datas.info.data.score * 100,
      keyData: {
        calories: datas.info.data.keyData.calorieCount,
        proteines: datas.info.data.keyData.proteinCount,
        glucides: datas.info.data.keyData.carbohydrateCount,
        lipides: datas.info.data.keyData.lipidCount,
      },
      activity: {
        sessions: datas.activity.data.sessions,
      },
      average_sessions: {
        sessions: datas.average_sessions.data.sessions,
      },
      performance: {
        sessions: datas.performance.data.data,
      },
    }
  }
}

const dataModelingMock = new Modeling()
const dataModelingApi = new Modeling()

export const userDatasMock = dataModelingMock.user(mockedUserDatas)
export const userDatasApi = dataModelingApi.user(apiUserDatas)

// console.log(userDatasMock)
// console.log(userDatasApi)
