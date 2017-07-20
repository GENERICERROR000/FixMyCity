import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import Reducers from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(Reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
