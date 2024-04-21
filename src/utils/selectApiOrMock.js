import { userDatasMock, userDatasApi } from '../utils/DataModeling'

export function selectApiOrMock(id) {
  if (id === '18') {
    return userDatasMock
  } else {
    return userDatasApi
  }
}
