
import React from 'react'

//style
import "./scss/emailadmin.scss"

const EmailAdmin = () => {



  return (
  
    <div className='emailWrapper'>

      <div className='outerDiv'> 
      <div className='left'>
      <div className='emailInformation'>
        <div className='logo'>logo</div>
        <div className='userinformation'>Userinformation</div>
      </div>
      </div>

      <div className='right'>
          <div className='emailName'>name</div>
          <div className='emailBody'>bodytext</div>
          <div className='emailFile'>
          <div className='file'>
             en fil
          </div>
          </div>
      </div>
      
      </div>
        
    </div>

  )
}

export default EmailAdmin