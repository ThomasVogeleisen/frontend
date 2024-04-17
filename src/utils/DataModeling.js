import { mockedData } from '../mocks/mocks'

// console.log(mockedData.user18.info.data.keyData)

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const performances = [
  'Intensité',
  'Vitesse',
  'Force',
  'Endurance',
  'Energie',
  'Cardio',
]

class MockedModeling {
  user(datas) {
    // Modeling day for user activity
    for (let i = 0; i < datas.user18.activity.data.sessions.length; i++) {
      datas.user18.activity.data.sessions[i].day = i + 1
    }

    // modeling day for user average sessions
    for (
      let i = 0;
      i < datas.user18.average_sessions.data.sessions.length;
      i++
    ) {
      datas.user18.average_sessions.data.sessions[i].day = days[i]
    }
    // modeling performances
    for (let i = 0; i < datas.user18.performance.data.data.length; i++) {
      datas.user18.performance.data.data[i].kind = performances[i]
    }

    return {
      name: datas.user18.info.data.userInfos.firstName,
      score: datas.user18.info.data.score * 100,
      keyData: {
        calories: datas.user18.info.data.keyData.calorieCount,
        proteines: datas.user18.info.data.keyData.proteinCount,
        glucides: datas.user18.info.data.keyData.carbohydrateCount,
        lipides: datas.user18.info.data.keyData.lipidCount,
      },
      activity: {
        sessions: datas.user18.activity.data.sessions,
      },
      average_sessions: {
        sessions: datas.user18.average_sessions.data.sessions,
      },
      performance: {
        sessions: datas.user18.performance.data.data,
      },
    }
  }
}

const dataModelingMock = new MockedModeling()
export const userDatas = dataModelingMock.user(mockedData)

// console.log(userDatas)
