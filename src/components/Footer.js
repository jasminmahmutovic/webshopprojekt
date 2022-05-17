import React from 'react'
import ContactUs from './ContactUs'
import Modal from '../modal/Modal'
import { Link } from "react-router-dom";
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
            <p>Shop</p>
            <Link to="#">Mitt konto</Link>
            <Link to="#">Handla & Beställa</Link>
            <Link to="#">Presentkort & Rabatter</Link>
          </ul>
          <ul>
          <p>Konto</p>
            <Link to="#" className='footer_button' onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Stäng kontakt": "Kontakta oss"}</Link>
            <Link to="#">Om oss</Link>
            <Link to="#">Villkor</Link>
          </ul>
        </div>
        <div className="footer_subscribe">
        <form>
          <p>Få de senaste nyheterna och erbjudanden</p>
          <input placeholder='Skriv din mail..' />
          <button>FÖLJ OSS</button>
        </form>
        </div>
      </footer>
    </div>
  )
}

export default Footer