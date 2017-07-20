import { combineReducers } from 'redux'
import issuesReducer from './issues_reducer'

const Reducer = combineReducers({
  issues: issuesReducer
})

export default Reducer
