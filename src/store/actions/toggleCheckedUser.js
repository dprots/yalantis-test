import {TOGGLE_CHECKED_USER} from '../constants'

export const toggleCheckedUser = payload => {
  return {
    type: TOGGLE_CHECKED_USER,
    payload
  }
}