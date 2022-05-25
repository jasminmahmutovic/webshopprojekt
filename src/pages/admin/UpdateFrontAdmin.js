import NavbarAdmin from './components/NavbarAdmin'
import React, {useState, useContext } from 'react';
import Uploadingimg from "./components/Uploadimg"
import { ImageContext } from '../../context/ImageContext';

//Style
import "./scss/updatefrontadmin.scss"

const UpdateFrontAdmin = () => {
  
  const { headline, setHeadline } = useContext(ImageContext);
  const [message, setMessage] = useState("")
  
  const handleInput = (e) => {
    setHeadline({ ...headline, [e.target.name]: e.target.value });
  }
  const handleClick = () => {
    alert("är du säker på att du vill ändra dina bilder")
    setMessage("Dina bilder är nu uppdaterade")
  }

  return (
    <div style={{height:"100vh", display:"flex"}}>
    <NavbarAdmin></NavbarAdmin>
    <div className='wrapperEverything'>
    <h1>UPPDATERA PRODUKT KATEGORIER</h1>
    
    <div className='wrapperChangeProducts'>
       
      <div className='rowOne'>
        <h2>Valda bilder</h2>
        <div className='wrapperAlPictures'>
        <div className='changePictures'>
       <Uploadingimg></Uploadingimg>
        </div>

        <div className='changePictures'>
        <Uploadingimg></Uploadingimg>
        </div>
        <div className='changePictures'>
        <Uploadingimg></Uploadingimg>
        </div>
        <div className='changePictures'>
        <Uploadingimg></Uploadingimg>
        </div>
        <div className='changePictures'>
        <Uploadingimg></Uploadingimg>
        </div>
        </div>
      </div>
    
    <div className='rowTwo'>
      <h2>Valda underrubriker till bildspel</h2>
        <div className='wrapperRubrik'>
          <div className='rubrikDiv'>
            <p>Rubrik 1</p>
            <input 
                name="headline1"
                placeholder="rubrik till bild 1"
                onChange={handleInput}
                required
            />
          </div>
          <div  className='rubrikDiv'>
            <p>Rubrik 2</p>
            <input
               name="headline2"
               placeholder="rubrik till bild 2"
               onChange={handleInput}
               required
            />
          </div>
          <div  className='rubrikDiv'>
            <p>Rubrik 3</p>
            <input     
               name="headline3"
               placeholder="rubrik till bild 3"
               onChange={handleInput}
               required
            />
          </div>
          <div  className='rubrikDiv'>
            <p>Rubrik 1</p>
            <input     
               name="headline4"
               placeholder="rubrik till bild 4"
               onChange={handleInput}
               required
            />
          </div>
        <div  className='rubrikDiv'>
          <p>Rubrik 4</p>
          <input     name="headline5"
               placeholder="rubrik till bild 5"
               onChange={handleInput}
               required
            />
        </div>
    
        </div>
      </div>

      <div className='rowThree'>
      <div className='confirmMessage'><p>{message}</p></div>
      <button 
      className='buttonImg'
      onClick={handleClick}>SPARA ÄNDRINGAR</button>
      </div>

      </div>

    </div>
    </div>
  )
}

export default UpdateFrontAdmin