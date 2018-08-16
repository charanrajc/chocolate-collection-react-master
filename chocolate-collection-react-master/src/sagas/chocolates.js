import * as chocolatesActionCreators from '../actionCreators/chocolates'
import * as chocolatesActionTypes from '../actionTypes/chocolates'
import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

function* getChocolates() {
  try {
    let chocolates = yield call(() => fetch(`http://localhost:4000/chocolates`)
      .then(response => response.json()));
    yield put(chocolatesActionCreators.showChocolates(chocolates))
  } catch (error) {
    yield put(chocolatesActionCreators.showChocolatesError(error))
  }
}

function* getChocolate(action) {
  try {
    let chocolate = yield call(() => fetch(`http://localhost:4000/chocolates/${action.id}`)
      .then(response => response.json()));
    yield put(chocolatesActionCreators.showChocolate(chocolate))
  } catch (error) {
    yield put(chocolatesActionCreators.showChocolate(error))
  }
}

function* addChocolate(chocolate) {
  try {
    let chocolate = yield call(() => axios.post(`http://localhost:4000/chocolates/`, chocolate)
      .then(response => response.data));
    yield put(chocolatesActionCreators.showChocolate(chocolate))
  } catch (error) {
    yield put(chocolatesActionCreators.showChocolate(error))
  }
}


export function* getChocolatesWatchers() {
  yield [
    takeLatest(chocolatesActionTypes.FETCH_CHOCOLATES, getChocolates),
    takeLatest(chocolatesActionTypes.FETCH_CHOCOLATE, getChocolate),
    takeLatest(chocolatesActionTypes.ADD_CHOCOLATE, addChocolate),
  ]
}