// import { useContext } from "react";
import './scss/ShoppingCart.scss'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//import closeIcon from '../assets/icons/close_white.png';
import closeIcon from '../assets/icons/close_white.png'

const ShoppingCart = () => {
  const navigate = useNavigate()
  const { setCartVisible } = useContext(CartContext) //basket state

  const handleNavigate = () => {
    setCartVisible(false)
    navigate('/checkout')
  }

  const handleClose = () => {
    setCartVisible(false)
  }

  return (
    <>
      <div onClick={handleClose} className="underlay"></div>
      <div className="shopping-container">
        <div className="shopping-cart-header">
          <h4>VARUKORG</h4>
          <img onClick={handleClose} src={closeIcon} alt="close icon" />
        </div>
        <div className="all-products-container">
          <div className="products-wrapper">
            {/* mappning för produkter */}
            <div className="img-product"></div>
            <div className="procuct-right-info">
              <div className="title-n-price">
                <p>Titel</p>
                <p className="price-txt">pris kr</p>
              </div>

              <div className="qty-size-remove-div">
                <div className="size-n-qty">
                  <p className="size-txt">Storlek:</p>
                  <p className="qty-txt">Antal:</p>
                </div>

                <p className="remove-product">Ta bort</p>
              </div>
            </div>
          </div>
        </div>

        <div className="totalPrice-toCheckout-div">
          <div className="total-price-div">
            <h4>Totalt pris:</h4>
            <h4> kr</h4>
          </div>
          <button onClick={handleNavigate}>TILL KASSAN</button>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
