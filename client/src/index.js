import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers/index'
import { AUTH_USER} from './actions/action_types'

const middleware = composeWithDevTools(applyMiddleware(reduxThunk))

const store = createStore(reducers, middleware)

// TODO: MAKE THIS MORE SECURE - MAYBE VALIDATE THE TOKEN?
const token = localStorage.getItem('jwt')
if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

registerServiceWorker()
