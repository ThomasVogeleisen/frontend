/**
 * Fonction pour formater les données reçues.
 * @param {Object} datas - Les données à formater.
 * @returns {Object} Les données formatées.
 */

export function formatDatas(datas) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const performances = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ]
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
    id: datas.info.data.id,
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
