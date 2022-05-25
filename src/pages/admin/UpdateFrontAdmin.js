import NavbarAdmin from './components/NavbarAdmin'
import React from 'react';
import Uploadingimg from "./components/Uploadimg"

//Style
import "./scss/updatefrontadmin.scss"

const UpdateFrontAdmin = () => {



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
      <h2>Valda underrubriker</h2>
        <div className='wrapperRubrik'>
          <div>
            <p>Rubrik 1</p>
            <input></input>
          </div>
          <div>
            <p>Rubrik 2</p>
            <input></input>
          </div>
          <div>
            <p>Rubrik 3</p>
            <input></input>
          </div>
          <div>
            <p>Rubrik 1</p>
            <input></input>
          </div>
        <div>
          <p>Rubrik 4</p>
          <input></input>
        </div>
        <div>
          <p>Rubrik 5</p>
          <input></input>
        </div>
        </div>
      </div>
      
      <button>SPARA ÄNDRINGAR</button>
      </div>

    </div>
    </div>
  )
}

export default UpdateFrontAdmin