import React from 'react'

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
