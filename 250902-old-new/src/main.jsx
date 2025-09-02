import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './new-250902-new.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
