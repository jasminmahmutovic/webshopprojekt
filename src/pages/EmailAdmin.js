
import React, {useContext} from 'react'
import { ContactFormContext } from '../context/ContactFormContext';

const EmailAdmin = () => {

 const {contactForm, setContactForm} = useContext(ContactFormContext)



  return (
    <div>EmailAdmin

    <div className='emailWrapper'>
        <div className='senderInformation'>
            <div>Icon här</div>
            <div>Adress här</div>
        </div>
        <div className='bodyEmail'>
            <div className='nameEmail'></div>
            <div className='mainText'></div>
            <div className='files'></div>
        </div>

    </div>

    </div>
  )
}

export default EmailAdmin