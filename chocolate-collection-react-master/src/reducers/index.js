import brandsReducer from './brands';
import usersReducer from './users';
import chocolatesReducer from './chocolates';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  brandsState: brandsReducer,
  usersState: usersReducer,
  chocolatesState: chocolatesReducer,
});

export default rootReducer;