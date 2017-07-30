import { DID_GET_ISSUES, REMOVE_ISSUES} from '../actions/action_types'

export default (state = [], action) => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case DID_GET_ISSUES:
      return [...action.payload]
    case REMOVE_ISSUES:
      return []
    default:
      return state
  }
}
