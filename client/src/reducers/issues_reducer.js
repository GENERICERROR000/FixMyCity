import { DID_GET_ISSUES, REMOVE_ISSUES, DELETE_ISSUE } from '../actions/action_types'

export default (state = [], action) => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case DID_GET_ISSUES:
      return [...action.payload]
    case REMOVE_ISSUES:
      return []
    case DELETE_ISSUE:
      let issues = [...state]
      issues.splice(action.payload, 1)
      return [...issues]
    default:
      return state
  }
}
