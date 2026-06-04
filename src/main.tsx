import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WorldProvider } from './context/WorldContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WorldProvider>
      <App />
    </WorldProvider>
  </React.StrictMode>,
)
