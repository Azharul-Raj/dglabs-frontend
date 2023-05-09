import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DataProvider from './context/DataProvider.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Toaster/>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
