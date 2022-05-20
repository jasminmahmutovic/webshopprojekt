import React from 'react'
import { Link } from 'react-router-dom'



import { useState } from 'react'

//Style
import "../scss/adminNavbar.scss"

const NavbarAdmin = () => {


  return (
    <div className='navbarAdmin'>
        <div className='Admin'><h1>ADMIN</h1></div>
        <div className='wrapperLinks'>
        <Link className='adminLink' to="addProduct">Lägg till produkt</Link>
        <Link className='adminLink' to="#">Redigera produkt</Link>
        <Link className='adminLink' to="#">Mail inkorg</Link>
        <Link className='adminLink' to="#">Uppdatera kategori</Link> 
        </div>
    </div>
  )
}

export default NavbarAdmin