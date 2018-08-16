import * as brandsActionCreators from '../actionCreators/brands'
import * as brandsActionTypes from '../actionTypes/brands'
import {call, put, takeLatest, all} from 'redux-saga/effects';

function* getBrands() {
  try {
    let brands = yield call(() => fetch(`http://localhost:4000/brands`)
      .then(response => response.json()));
    yield put(brandsActionCreators.showBrands(brands))
  } catch (error) {
    yield put(brandsActionCreators.showBrandsError(error))
  }
}

function* getBrandWithChocolates(action) {
  try {
    let brandWithChocolates = yield all([

      call(() => fetch(`http://localhost:4000/brands/${action.brandId}`)
        .then(response => response.json())),

      call(() => fetch(`http://localhost:4000/chocolates?brandId=${action.brandId}`)
        .then(response => response.json()))

    ]);
    let [brand, chocolates] = brandWithChocolates;
    yield put(brandsActionCreators.showBrandWithChocolates(brand, chocolates))
  } catch (error) {
    yield put(brandsActionCreators.showBrandWithChocolatesError(error))
  }
}

export function* getBrandsWatcher() {
  yield [
    takeLatest(brandsActionTypes.FETCH_BRANDS, getBrands),
    takeLatest(brandsActionTypes.FETCH_BRAND_WITH_CHOCOLATES, getBrandWithChocolates)
  ]
}