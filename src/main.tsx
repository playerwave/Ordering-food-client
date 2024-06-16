import React from 'react'
import AppRoutes from './AppRoutes'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProvierWithNavigate from './auth/Auth0ProviderWithNavigate'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProvierWithNavigate>
          <AppRoutes/>
        </Auth0ProvierWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
