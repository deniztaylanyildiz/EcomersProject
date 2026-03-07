import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js' 
// 1. BrowserRouter'ı import et
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* 2. App bileşenini Router ile sarmala */}
    <Router>
      <App />
    </Router>
  </Provider>,
)