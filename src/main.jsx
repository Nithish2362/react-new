import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Reducer } from './Reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Reducer />
    
  </StrictMode>,
)
