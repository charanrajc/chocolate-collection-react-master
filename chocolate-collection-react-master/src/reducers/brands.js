import * as brandActionTypes from '../actionTypes/brands'
import {Map} from 'immutable';

export default (prevState = {}, action) => {
  switch (action.type) {
    case brandActionTypes.FETCH_BRANDS:
      return prevState;

    case brandActionTypes.FETCH_BRANDS_SUCCESS:
      return prevState.set('brands', action.brands);

    case brandActionTypes.FETCH_BRAND_WITH_CHOCOLATES:
      return prevState.set('isFetching', true);

    case brandActionTypes.FETCH_BRAND_WITH_CHOCOLATES_SUCCESS:
      return prevState
        .set('brand', action.brand)
        .set('chocolates', action.chocolates)
        .set('isFetching', false);

    case brandActionTypes.FETCH_BRANDS_ERROR:
    case brandActionTypes.FETCH_BRAND_WITH_CHOCOLATES_ERROR:
      return prevState.set('error', action.error);

    default:
      return prevState;
  }
}