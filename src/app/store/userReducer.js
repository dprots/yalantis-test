import {initialState} from './initialState'
import {FETCH_USERS, TOGGLE_CHECKED_USER} from './constants';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, users: action.payload, loading: false};

    case TOGGLE_CHECKED_USER:
      const newUsers = state.users.map(item => ({...item}));
      const selectedUserIndex = newUsers.findIndex(item => item.id === action.payload);
      newUsers[selectedUserIndex].selected = !newUsers[selectedUserIndex].selected;
      return {...state, users: newUsers};

    default:
      return state;
  }
};
