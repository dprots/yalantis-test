import {combineReducers} from 'redux';
import {userReducer} from '../../../store/reducer';

// @ts-ignore
const rootReducer = combineReducers({
  userReducer: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
