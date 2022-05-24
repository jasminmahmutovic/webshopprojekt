// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import './checkout.scss'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { CartContext } from '../context/CartContext'
import maestroIcon from '../../src/assets/icons/icons8-maestro-100.png'
import visaIcon from '../../src/assets/icons/icons8-visa-100.png'
import mastercardIcon from '../../src/assets/icons/icons8-mastercard-logo-100.png'

const Checkout = () => {
  const name = 'amalia'
  const person = {
    first: name,
  }

  console.log(person)

  // const { cart, setCart} = useContext(CartContext)

  // const priceArray = cart.map((p) => p.price);

  // const removeProduct = (id) => {
  //     setCart([...cart].filter((product) => product.id !== id))
  // }

  // const {user} = useContext(UserContext);

  // useEffect(() => {
  //     setAdressInfo({...adressInfo)
  //    },[cart])

  //    const [adressInfo, setAdressInfo] = useState({
  //        firstname: user.firstname || "",
  //        lastname: user.lastname ||  "",
  //        mail: user.mail || "",
  //        adress: user.adress || "",
  //        city: user.city || "",
  //        zipCode: user.zipCode || "",
  //        products: []
  //    })

  //   const handleInput = (e) => {
  //     setAdressInfo({ ...adressInfo, [e.target.name]: e.target.value });
  //   };

  return (
    <>
      <div className="checkout-bakgrund">
        <div className="overlay-checkout">
          <div className="checkout-text-div">
            <h1>KASSA</h1>
          </div>

          <form>
            <div className="checkout-cards-div">
              <div className="order-summary-card-wrapper">
                <div className="banner">
                  <b className="banner-text">ORDER SAMMANFATTNING</b>
                </div>
                <div className="order-summary-card-div">
                  {/* lägga en mappning för denna div */}
                  <div className="product-checkout">
                    {/* <img className='product-img' src="#" alt="product" /> */}
                    <div className="product-img-left"></div>

                    <div className="procuct-info-right">
                      <div className="title-price">
                        <p>Titel</p>
                        <p className="price">pris kr</p>
                      </div>

                      <div className="color-size-remove-div">
                        <div className="color-size">
                          <p className="color">Färg:</p>
                          <p className="size">Storlek:</p>
                        </div>

                        <p className="remove">Ta bort</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="totalPrice-checkout-div">
                  <h4>Totalt pris:</h4>
                  <h4>pris kr</h4>
                </div>
              </div>

              {/* shipping card */}
              <div className="shipping-card-div">
                <div className="banner">
                  <b className="banner-text">FRAKTADRESS</b>
                </div>

                <div className="shipping-card-wrapper">
                  <input
                    className="first-sec-input"
                    type="text"
                    name="firstname"
                    placeholder="Förnamn..."
                    // value={adressInfo.firstname}
                    // onChange={handleInput}
                    required
                  />

                  <input
                    className="first-sec-input"
                    type="text"
                    name="lastname"
                    placeholder="Efternamn..."
                    // value={adressInfo.lastname}
                    // onChange={handleInput}
                    required
                  />

                  <input
                    className="first-sec-input"
                    type="text"
                    name="mail"
                    placeholder="Email..."
                    // value={adressInfo.mail}
                    // onChange={handleInput}
                    required
                  />

                  <input
                    className="first-sec-input"
                    type="text"
                    name="phone"
                    placeholder="Telefon..."
                    // value=""
                    // onChange={handleInput}
                    required
                  />

                  <input
                    className="second-sec-input"
                    type="text"
                    name="adress"
                    placeholder="Adress..."
                    // value={adressInfo.adress}
                    // onChange={handleInput}
                    required
                  />

                  <input
                    className="second-sec-input"
                    type="text"
                    name="city"
                    placeholder="Stad..."
                    // value={adressInfo.city}
                    // onChange={handleInput}
                    required
                  />

                  <input
                    className="second-sec-input"
                    type="text"
                    name="zipcode"
                    placeholder="Postnummer..."
                    // value={adressInfo.zipCode}
                    // onChange={handleInput}
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
                      <img src={visaIcon} alt={visaIcon} />
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

                  <button className="make-purchase-btn">SLUTFÖR KÖP</button>
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
