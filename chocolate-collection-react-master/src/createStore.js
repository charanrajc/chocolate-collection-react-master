import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import { Map } from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension';


let initialState = {
  brandsState: Map({ brands: [], isFetching: true }),
  chocolatesState: Map({ chocolates: [], isFetching: true }),
  usersState: Map({ isLoggedIn: false, firstName: '', lastName: '' })
};
let sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(sagaMiddleware, createLogger())));
sagaMiddleware.run(rootSaga);

export default store;

