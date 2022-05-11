import React from 'react'

const DropDownModal = ({open, children}) => {

  if(!open) return null;

  return (

    <div > 
        {children}
    </div>
  )
}

export default DropDownModal