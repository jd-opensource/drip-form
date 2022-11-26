import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { worker } from './mocks/browser'
if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
