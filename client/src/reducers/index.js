import { combineReducers } from 'redux'
import authReducer from './auth_reducer'
import issuesReducer from './issues_reducer'

const Reducer = combineReducers({
  auth: authReducer,
  issues: issuesReducer
})

export default Reducer
