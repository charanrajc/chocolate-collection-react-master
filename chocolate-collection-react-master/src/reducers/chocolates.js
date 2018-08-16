import * as chocolateActionTypes from '../actionTypes/chocolates';

export default (prevState = {}, action) => {
  switch (action.type) {
    case chocolateActionTypes.FETCH_CHOCOLATES:
      return prevState;

    case chocolateActionTypes.FETCH_CHOCOLATES_SUCCESS:
      return prevState.set('chocolates', action.chocolates);

    case chocolateActionTypes.FETCH_CHOCOLATE:
      return prevState
        .set('chocolate', action.chocolate)
        .set('isFetching', false);

    case chocolateActionTypes.FETCH_CHOCOLATE_ERROR:
    case chocolateActionTypes.FETCH_CHOCOLATES_ERROR:
      return prevState.set('error', action.error);

    default:
      return prevState;
  }
}