import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "styles/main.scss"
import { ShoppingProvider } from 'context/ShoppingProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingProvider>
      <App />
    </ShoppingProvider>
  </React.StrictMode>,
)
