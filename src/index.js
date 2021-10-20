import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ResultContextProvider } from './contexts/ResultContextProvider'

ReactDom.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById('root')
)
