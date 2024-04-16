import { mockedData } from '../mocks/mocks'

// console.log(mockedData.user18.average_sessions.data.sessions)

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

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

    return {
      name: datas.user18.info.data.userInfos.firstName,
      score: datas.user18.info.data.score * 100,
      activity: {
        sessions: datas.user18.activity.data.sessions,
      },
      average_sessions: {
        sessions: datas.user18.average_sessions.data.sessions,
      },
    }
  }
}

const dataModelingMock = new MockedModeling()
export const userDatas = dataModelingMock.user(mockedData)

console.log(userDatas)
