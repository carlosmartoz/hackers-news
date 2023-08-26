// React imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// App component import
import App from './App'

// Create a root for rendering
const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

// Render the app within a StrictMode wrapper
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
