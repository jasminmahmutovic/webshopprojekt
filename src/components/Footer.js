import React from 'react'
import ContactUs from './ContactUs'
import Modal from '../modal/Modal'
import { useState } from 'react'

//style
import "./scss/Footer.scss"

const Footer = (props) => {
  
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
      <Modal  open={isOpen} onClose={() => setIsOpen(false)}>
      <ContactUs></ContactUs>  
      </Modal>   
     
      <footer>
        <div className="brand_logo"><p>COOL FASHION</p></div>
        <div className="footer_links">
          <ul>
            <li>My Account</li>
            <li>Shipping & order</li>
            <li>Gift cards & Coupons</li>
          </ul>
          <ul>
            <li> <button onClick={() => setIsOpen(!isOpen)}>Contact</button></li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer_subscribe"> Här är ett formulär</div>
      </footer>
    </div>
  )
}

export default Footer