import React from 'react'
import AppRoutes from './AppRoutes'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes/>
    </Router>
  </React.StrictMode>,
)
