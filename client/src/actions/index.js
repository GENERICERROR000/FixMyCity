import { DID_GET_ISSUES, DID_GET_ISSUE} from './action_types'

const API_URL = 'http://localhost:3000/api/v1/issues/'

export const getIssues = () => {
  return (dispatch) => {
    fetch(API_URL)
      .then(resp => resp.json())
      .then(issues => dispatch({type: DID_GET_ISSUES, payload: issues}))
  }
}

export const getIssue = (id) => {
  return {
    type: DID_GET_ISSUE,
    payload: fetch(API_URL + `${id}`)
    .then(res => res.json())
    .then(issue => issue)
  }
}
