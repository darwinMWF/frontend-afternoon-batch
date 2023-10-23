import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from "../src/hooks/useReducer"
// import App from './App.jsx'
// import './index.css'
import { App } from './hooks/example2/useReducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
)
