import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import UserProvider from './context/UserContext'
import CartProvider from './context/CartContext'
import ImageProvider from './context/ImageContext'
import RegUserProvider from './context/RegisterContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <ImageProvider>
          <RegUserProvider>
        <App />
        </RegUserProvider>
        </ImageProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
)