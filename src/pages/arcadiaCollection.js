
//styling imports
import './arcadiaCollection.scss';
import header from '../assets/images/collection_posters/ARCADIA_CLUB/arcadiaText.png';
import guyDreads from '../assets/images/collection_posters/ARCADIA_CLUB/guyDreads.jpg';
import girl1 from '../assets/images/collection_posters/ARCADIA_CLUB/girlBlackHair.jpg';
import girl2 from '../assets/images/collection_posters/ARCADIA_CLUB/girlLollipop.jpg';
import discoMan from '../assets/images/collection_posters/ARCADIA_CLUB/discoMan.jpg';
import hawaiiBoy from '../assets/images/collection_posters/ARCADIA_CLUB/hawaiiBoy.jpg';
import gameGirl from '../assets/images/collection_posters/ARCADIA_CLUB/gameGirl.jpg';
import arcadeGirl from '../assets/images/collection_posters/ARCADIA_CLUB/arcadeGirl.jpg';
import shoesGirl from '../assets/images/collection_posters/ARCADIA_CLUB/shoesGirl.jpg';
import sweaterGirl from '../assets/images/collection_posters/ARCADIA_CLUB/sweaterGirl.jpg';
import neonGirl from '../assets/images/collection_posters/ARCADIA_CLUB/neonGirl.jpg';
import bikeGirl from '../assets/images/collection_posters/ARCADIA_CLUB/girlBike.jpg';

const ArcadiaCollection = () => {

    return (
        <>
            <div className='header-div'>
                <img src={header} alt="arcadia club" />
            </div>
            
            <div className='pic1'>
                <img src={guyDreads} alt="guy" />
            </div>

            <div className='two-pics'>
                <img src={girl1} alt="girl with black hair" />
                <img src={girl2} alt="girl with short hair" />
            </div>

            <div className='sec-3'>
                <div className='overlay'>
                    <div className='pics-row'>
                        <img src={gameGirl} alt="game girl" />
                        <img src={discoMan} alt="disco man" />
                        <img src={shoesGirl} alt="" />
                        <img src={sweaterGirl} alt="" />
                    </div>
                </div>
            </div>

            <div className='two-pics'>
                <img src={neonGirl} alt="neon girl" />
                <img src={bikeGirl} alt="biker girl" />
            </div>

            <div className='two-pics'>
                <img src={arcadeGirl} alt="arcade girl" />
                <img src={hawaiiBoy} alt="hawaii boy" />
            </div>
        </>
    )
}

export default ArcadiaCollection;

// Sidan för Arcadia Club kollektionen från första sidan