import {FETCH_USERS, TOGGLE_CHECKED_USER} from './constants';

const fetchUsers = payload => {
  return {
    type: FETCH_USERS,
    payload
  }
};

const toggleCheckedUser = payload => {
  return {
    type: TOGGLE_CHECKED_USER,
    payload
  }
};

export {fetchUsers, toggleCheckedUser};