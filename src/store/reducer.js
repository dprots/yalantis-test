import {
  // FETCH_USERS_REQUESTED,
  // FETCH_USERS_SUCCESS,
  FETCH_USERS,
  TOGGLE_CHECKED_USER} from './constants';

export const initialState = {
  users: [],
  loading: true,
  error: null,
  message: null,
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, users: action.payload}

    // case FETCH_USERS_SUCCESS:
    //   const {users} = action.payload;
    //   state.loading = false;
    //   state.error = null;
    //   state.users = users;
    //   return state
    //
    // case FETCH_USERS_FAILURE:
    //   state.loading = false;
    //   state.error = action.payload;
    //   return state

    case TOGGLE_CHECKED_USER:
      debugger
      const newUsers = state.users.map(item => ({...item}));
      const selectedUserIndex = newUsers.findIndex(item => item.id === action.payload);
      newUsers[selectedUserIndex].selected = !newUsers[selectedUserIndex].selected;
      return {...state, users: newUsers}

    default:
      return state
  }
};
