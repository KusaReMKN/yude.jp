import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./i18n.ts"

import './index.css'
import 'github-markdown-css';
import 'katex/dist/katex.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
