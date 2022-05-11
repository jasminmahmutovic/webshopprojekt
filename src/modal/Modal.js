import React from 'react'

//Styling in footer.scss


const Modal = ({open, children, onClose}) => {
  if(!open) return null;

  return (
    <div >
  
        {/* <button className='close_modal'  onClick={onClose}>x</button> */}
        {children}

    </div>

  )
}

export default Modal
