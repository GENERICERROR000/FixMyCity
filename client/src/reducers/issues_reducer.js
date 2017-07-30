import { DID_GET_ISSUES, DID_GET_ISSUE, REMOVE_ISSUES} from '../actions/action_types'

export default (state = [], action) => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case DID_GET_ISSUES:
      return [...action.payload]
    case DID_GET_ISSUE:
      return [...state, ...action.payload]
    case REMOVE_ISSUES:
      return []
    default:
      return state
  }
}
