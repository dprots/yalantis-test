import {createStore} from 'redux';

import {userReducer, initialState} from './reducer';

const store = createStore(userReducer, initialState)

export default store