import React from 'react'
import ReactDOM from 'react-dom/client'
import { Index } from './hooks/usecontext'
// import App from "../src/hooks/useReducer"
// import App from './App.jsx'
// import './index.css'
import { App } from './hooks/example2/useReducer'
import { Effect } from './hooks/useEffect/effect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Index />
   <Effect/>
  </React.StrictMode>,
)
