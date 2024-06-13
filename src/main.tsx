import React from 'react'
import AppRoutes from './AppRoutes'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProvierWithNavigate from './auth/Auth0ProviderWithNavigate'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProvierWithNavigate>
        <AppRoutes/>
      </Auth0ProvierWithNavigate>
    </Router>
  </React.StrictMode>,
)
