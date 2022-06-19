// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import './checkout.scss'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import maestroIcon from '../../src/assets/icons/icons8-maestro-100.png'
import visaIcon from '../../src/assets/icons/icons8-visa-100.png'
import mastercardIcon from '../../src/assets/icons/icons8-mastercard-logo-100.png'

const Checkout = () => {

  const { user } = useContext(UserContext)
  const { cart, setCart } = useContext(CartContext)


  const [ myOrder, setMyOrder] = useState({
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    address: '',
    city: '',
    zipcode: '',
    products: [
      ...cart
    ]
  })



   useEffect(() => {
     setMyOrder({...myOrder})
   }, [cart])

  useEffect(() => {
    //cartItems()
  })

  const handleInput = (e) => {
    setMyOrder({ ...myOrder, [e.target.name]: e.target.value })
  }


  //calculate the price of all items
  const itemsPrice = cart.reduce((a, b) => a + parseInt(b.price) * parseInt(b.quantity), 0)

  const removeProduct = (product) => {
    const exist = cart.find((x) => x.id === product.id)
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.id !== product.id))
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x,
        ),
      )
    }
  }

  const submitOrder = async (e) => {
    e.preventDefault()
    // if (cart.length > 0) {
    //   alert("Din order är skickad!")
    //   //alert(JSON.stringify(adressInfo))
    // }

    try {
      const res = await fetch('http://localhost:5000/api/order/neworder', {
        method: 'post',
        body: JSON.stringify(myOrder),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.error('Error: ', error)
    }
  }

  return (
    <>
      <div className="checkout-bakgrund">
        <div className="overlay-checkout">
          <div className="checkout-text-div">
            <h1>KASSA</h1>
          </div>

          <form onSubmit={submitOrder}>
            <div className="checkout-cards-div">
              <div className="order-summary-card-wrapper">
                <div className="banner">
                  <b className="banner-text">ORDER SAMMANFATTNING</b>
                </div>
                <div className="order-summary-card-div">
                  <div className="no-products">
                    {cart.length === 0 && <p>Inga produkter...</p>}
                  </div>
                  {/* lägga en mappning för denna div */}
                  {cart && cart.map((item) => (
                    <div key={item.id} className="product-checkout">
                      {/* <img
                        className="product-img-left"
                        src={item.img[0].img}
                        alt={item.title}
                      /> */}

                      <div className="procuct-info-right">
                        <div className="title-price">
                          <p
                            value={item.title}
                            id="product-title"
                          >{item.title} </p>
                            
                          <p
                            value={item.price}
                            id="product-price"
                            className="price"
                          >{item.price}kr</p>
                         
                        </div>

                        <div className="color-size-remove-div">
                          <div className="color-size">
                            <p className="color">Färg: {item.color}</p>
                            <p className="size">Storlek: {item.size}</p>
                          </div>

                          <p
                            onClick={() => removeProduct(item)}
                            className="remove"
                          >
                            Ta bort
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="totalPrice-checkout-div">
                  <h4>Totalt pris:</h4>
                  <h4>{itemsPrice}kr</h4>
                </div>
              </div>

              {/* shipping card */}
              <div className="shipping-card-div">
                <div className="banner">
                  <b className="banner-text">FRAKTADRESS</b>
                </div>

                <div className="shipping-card-wrapper">
                  <input
                    id="firstname-order"
                    className="first-sec-input"
                    name="firstname"
                    placeholder="Förnamn..."
                    value={myOrder.firstname}
                    onChange={handleInput}
                    required
                  />

                  <input
                    id="lastname-order"
                    className="first-sec-input"
                    name="lastname"
                    placeholder="Efternamn..."
                    value={myOrder.lastname}
                    onChange={handleInput}
                    required
                  />

                  <input
                    className="first-sec-input"
                    name="email"
                    placeholder="Email..."
                    value={myOrder.mail}
                    onChange={handleInput}
                    required
                  />

                  <input
                    className="first-sec-input"
                    name="telephone"
                    placeholder="Telefon..."
                    value={myOrder.telephone}
                    onChange={handleInput}
                    required
                  />

                  <input
                    className="second-sec-input"
                    name="address"
                    placeholder="Adress..."
                    value={myOrder.adress}
                    onChange={handleInput}
                    required
                  />

                  <input
                    className="second-sec-input"
                    name="city"
                    placeholder="Stad..."
                    value={myOrder.city}
                    onChange={handleInput}
                    required
                  />

                  <input
                    className="second-sec-input"
                    name="zipcode"
                    placeholder="Postnummer..."
                    value={myOrder.zipCode}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              {/* payment card */}
              <div className="payment-card-div">
                <div className="payment-card-container">
                  <div className="banner">
                    <b className="banner-text">BETALNING</b>
                  </div>

                  <div className="payment-card-wrapper">
                    <div className="payment-icons-row">
                      <img
                        className="visa-icon"
                        src={visaIcon}
                        alt={visaIcon}
                      />
                      <div className="payment-icon">
                        <img src={mastercardIcon} alt={mastercardIcon} />
                        <p>mastercard</p>
                      </div>
                      <div className="payment-icon">
                        <img src={maestroIcon} alt={maestroIcon} />
                        <p>maestro</p>
                      </div>
                    </div>

                    <input
                      id="first-input-payment"
                      className="first-last-input"
                      type="text"
                      placeholder="Kortnummer"
                      required
                    />
                    <div className="payment-middle-inputs-row">
                      <input
                        className="payment-middle-inputs"
                        type="text"
                        placeholder="MM"
                        required
                      />

                      <input
                        className="payment-middle-inputs"
                        type="text"
                        placeholder="ÅÅ"
                        required
                      />
                    </div>
                    <input
                      className="first-last-input"
                      type="text"
                      placeholder="XXX"
                      required
                    />
                  </div>

                  <button type="submit" className="make-purchase-btn">
                    SLUTFÖR KÖP
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Checkout

//Sidan som är till för Checkout!
