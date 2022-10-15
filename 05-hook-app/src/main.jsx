import React from 'react'
import ReactDOM from 'react-dom/client'

import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
)
