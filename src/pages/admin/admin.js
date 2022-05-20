
import AddProduct from './AddProduct'
import Modal from '../../modal/Modal'

import {  useEffect, useRef, useState } from 'react'

//Style
import "./scss/adminNavbar.scss"
import EmailAdmin from './EmailAdmin'
import NavbarAdmin from "./components/NavbarAdmin"


const Admin = () => {

    
    const [addProductOpen, setAddProductOpen] = useState(false) //Addproduct Modal
    const [adminEmailOpen, setAdminEmailOpen] = useState(false) //Addproduct Modal
    

    const basicStyle = {
        display:"flex",
        height:"100vh",
    }
    


   

    return (
       <div style={basicStyle}>

     <div className='navbarAdmin' >
        <div className='Admin'><h1>ADMIN</h1></div>
        <div className='wrapperLinks'>
            <button  onClick={() =>setAddProductOpen(!addProductOpen)} className="adminLink">Redigera produkt</button>
            <button  onClick={() =>setAdminEmailOpen(!adminEmailOpen) } className="adminLink">Email</button>
            <button  className="adminLink">2</button>
            <button  className="adminLink">3</button>
        </div>
       </div>

       <div className="renderAdminPages" style={{width:"100%"}}>
                <Modal open={addProductOpen}>
                    <AddProduct></AddProduct>
                </Modal>
     
                <Modal  open={adminEmailOpen}>
                    <EmailAdmin></EmailAdmin>
                </Modal>
       </div> 
       </div>
    )
}

export default Admin;

