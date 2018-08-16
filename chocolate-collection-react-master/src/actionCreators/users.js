import * as userActionTypes from '../actionTypes/users'

export function signup(user) {
  return {
    type: userActionTypes.SIGNUP,
    user
  }
}

export function login(user) {
  return {
    type: userActionTypes.LOGIN,
    user
  }
}


export function logout() {
  return {
    type: userActionTypes
  }
}