// TODO: BEAK UP INTO SEPARATE ACTION FILES
// TODO: DO THE ".catch()"'S  ACTUALLY WORK?
// TODO: ##### MAKE SURE AXIOS ACTIONS ARE SENDING JWT!!! #####

import axios from 'axios'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, DID_GET_ISSUES, DID_GET_ISSUE } from './action_types'

const ROOT_URL = 'http://localhost:3000/api/v1/'

export const signinUser = ({ email, password }) => {
  return (dispatch) => {
    axios.post(ROOT_URL + "/authenticate", { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('jwt', res.data.token)
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    axios.post(ROOT_URL + "/signup", { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('jwt', res.data.token)
      })
      .catch(res => {
        dispatch(authError(res.data.error))
      })
  }
}

export const signoutUser = () => {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}

export const getIssues = () => {
  return (dispatch) => {
    axios.get(ROOT_URL + "issues", { headers: {'x-access-token': localStorage.jwt} })
      .then(res => res.json())
      .then(issues => dispatch({
        type: DID_GET_ISSUES,
        payload: issues
      }))
      .catch(res => {
        dispatch(authError(res.data.error))
      })
  }
}

export const getIssue = (id) => {
  return (dispatch) => {
    axios.get(ROOT_URL + "issues/" + `${id}`, { headers: {'x-access-token': localStorage.jwt} })
      .then(res => res.json())
      .then(issue => dispatch({
        type: DID_GET_ISSUE,
        payload: issue
      }))
      .catch(res => {
        dispatch(authError(res.data.error))
      })
}

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
