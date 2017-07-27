import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers/index'
import 'semantic-ui-css/semantic.min.css'
import './css/index.css'
import { AUTH_USER } from './actions/action_types'

// TODO: REFACTOR SOMEHOW

const middleware = composeWithDevTools(applyMiddleware(reduxThunk))
const store = createStore(reducers, middleware)
const jwt = localStorage.jwt
const URL = 'http://localhost:3000/api/v1/auth'

const renderReactDOM = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
  )
  registerServiceWorker()
}

if (jwt) {
  axios.get(URL, { headers: {'x-access-token': jwt} })
    .then(resp => {
      if (resp.data.success) {
        store.dispatch({ type: AUTH_USER })
        renderReactDOM()
      } else {
        localStorage.removeItem('jwt')
        renderReactDOM()
      }
    })
    .catch(res => {
      renderReactDOM()
    })
} else {
  renderReactDOM()
}
