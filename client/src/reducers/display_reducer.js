import { DISPLAY_ISSUE } from '../actions/action_types'

export default (state = false, action) => {
  if (action.error) {
    return state
  }

  switch (action.type) {
    case DISPLAY_ISSUE:
      return {...action.payload}
    default:
      return state
  }
}
