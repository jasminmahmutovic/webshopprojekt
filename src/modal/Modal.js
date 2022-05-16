import React from 'react'
import LoginForm from '../components/LoginForm';

//Styling in footer.scss


const Modal = ({open, children}) => {
  if(!open) return null;

  return (
    <div >
        {children}
    </div>

  )
}

export default Modal
