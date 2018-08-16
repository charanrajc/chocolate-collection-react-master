import * as chocolateActionTypes from '../actionTypes/chocolates'

export function fetchChocolates() {
  return {
    type: chocolateActionTypes.FETCH_CHOCOLATES
  }
}

export function showChocolates(chocolates) {
  return {
    type: chocolateActionTypes.FETCH_CHOCOLATES_SUCCESS,
    chocolates
  }
}

export function showChocolatesError(error) {
  return {
    type: chocolateActionTypes.FETCH_CHOCOLATE_ERROR,
    error
  }
}

export function fetchChocolate(id) {
  return {
    type: chocolateActionTypes.FETCH_CHOCOLATE,
    id
  }
}

export function showChocolate(chocolate) {
  return {
    type: chocolateActionTypes.FETCH_CHOCOLATE_SUCCESS,
    chocolate
  }
}

export function showChocolateError(error) {
  return {
    type: chocolateActionTypes.FETCH_CHOCOLATE_ERROR,
    error
  }
}


export function AddChocolate(chocolate) {
  return {
    type: chocolateActionTypes.ADD_CHOCOLATE,
    chocolate
  }
}

export function AddChocolateSuccess(chocolate) {
  return {
    type: chocolateActionTypes.ADD_CHOCOLATE_SUCCESS,
    chocolate
  }
}

export function AddChocolateError(error) {
  return {
    type: chocolateActionTypes.ADD_CHOCOLATE_ERROR,
    error
  }
}