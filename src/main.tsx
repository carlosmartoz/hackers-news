import App from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Main
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
