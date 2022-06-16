import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import UserProvider from './context/UserContext'
import CartProvider from './context/CartContext'
import ImageProvider from './context/ImageContext'
import GetUserProvider from './context/GetUsers'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <ImageProvider>
          <GetUserProvider>
        <App />
        </GetUserProvider>
        </ImageProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)