import React from 'react'
import { BrowserRouter } from 'react-router-dom'
 'react-dom/client'
import App from '../App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext'





ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StoreContextProvider>

    </StoreContextProvider>
    </App>
   </BrowserRouter>
)