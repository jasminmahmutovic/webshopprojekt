// import { useContext } from "react";
import './scss/ShoppingCart.scss';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react'
import closeIcon from '../assets/icons/close_white.png';


const ShoppingCart = () => {

    const {setCartVisible } = useContext(CartContext) //basket state

    const handleClose = () => {
        setCartVisible(false)
    }

    return (
        <>
            <div onClick={handleClose} className="underlay">
                <div className='shopping-container'>
                    <div className='shopping-cart-header'>
                        <h4>VARUKORG</h4>
                        <img img="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart;