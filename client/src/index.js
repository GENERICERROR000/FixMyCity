import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers/index'
import './css/index.css'

const middleware = composeWithDevTools(applyMiddleware(reduxThunk))

const store = createStore(reducers, middleware)

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.querySelector('#root')
)

registerServiceWorker()
