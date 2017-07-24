import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers/index'
import { AUTH_USER} from './actions/types'

const middleware = applyMiddleware(reduxThunk)

const store = createStore(reducers, middleware)

const token = localStorage.getItem('token')
if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
