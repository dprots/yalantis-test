import {FETCH_USERS} from '../constants'

export const fetchUsers = payload => {
  return {
    type: FETCH_USERS,
    payload
  }
}