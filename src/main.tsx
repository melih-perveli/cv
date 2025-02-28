import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PDFExport from './PDFExport.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PDFExport />
  </StrictMode>,
)
