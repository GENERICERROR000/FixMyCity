// TODO: MOVE AXIOS CALLS TO TASK SPECIFIC FILES
// TODO: DO THE ".catch()"'S  ACTUALLY WORK?

import axios from 'axios'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, DID_GET_ISSUES, DISPLAY_ISSUE, REMOVE_ISSUES, REMOVE_DISPLAY_ISSUE } from './action_types'

const ROOT_URL = 'http://localhost:3000/api/v1/'

export const signinUser = (email, password) => {
  const URL = `${ROOT_URL}signin`

  return (dispatch) => {
    axios.post(URL, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('jwt', res.data.token)
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}

export const signupUser = (email, password) => {
  const URL = `${ROOT_URL}signup`

  return (dispatch) => {
    axios.post(URL, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('jwt', res.data.token)
      })
      .catch(res => {
        dispatch(authError(res.error))
      })
  }
}

export const signoutUser = () => {
  localStorage.removeItem('jwt')
  return { type: UNAUTH_USER }
}

export const getIssues = (filterInput) => {
  const location = filterInput.location
  const start_date = filterInput.start_date
  const end_date = filterInput.end_date
  const issue_type = filterInput.issue_type
  const num_complaints = filterInput.num_complaints
  const URL = `${ROOT_URL}issues`

  return (dispatch) => {
    axios.post(URL, {location, start_date, end_date, issue_type, num_complaints}, {headers: {'x-access-token': localStorage.jwt}})
      .then(res => dispatch({
        type: DID_GET_ISSUES,
        payload: res.data
      }))
      .catch(res => {
        dispatch(authError(res.error))
      })
  }
}

export const displayIssue = (issue) => {
  return {
    type: DISPLAY_ISSUE,
    payload: issue
  }
}

export const clearIssues = () => {
  return { type: REMOVE_ISSUES }
}

export const clearDisplay = () => {
  return { type: REMOVE_DISPLAY_ISSUE }
}

export  const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
