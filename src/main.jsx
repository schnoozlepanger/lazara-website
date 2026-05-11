import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LazaraHomepage from './LazaraHomepage.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazaraHomepage />
  </React.StrictMode>,
)
