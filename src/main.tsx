import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { injectSpeedInsights } from '@vercel/speed-insights'; //

// Inicializar Speed Insights
injectSpeedInsights(); //

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
