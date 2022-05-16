import './shopByCategory.scss';
import byxor from '../../assets/images/KATEGORIER/byxor.jpg';
import toppar from '../../assets/images/KATEGORIER/toppar.jpg';
import klänning_kjolar from '../../assets/images/KATEGORIER/klänning_kjol.jpg';
import skjortor from '../../assets/images/KATEGORIER/skjortor.jpg';
import ytterkläder from '../../assets/images/KATEGORIER/ytterkläder.jpg';
import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
 
    const navigate = useNavigate();

    return (
        <>
            {/* section 1 SHOP BY CATEGORY */}
            <div className='shop-by-category-div'>
                <div className='category-header'>
                    <h1>SHOPPA EFTER KATEGORI</h1>
                </div>                    

                <div className='category-images'>

                    <div onClick={() => navigate('/pants')} className='category-wrapper'>
                            <div className='category-image'>
                                <img src={byxor} alt="byxor kategori" />
                                <figcaption>
                                    <p>VISA BYXOR</p>
                                </figcaption>
                            </div>
                        <b>BYXOR</b>
                    </div>

                    <div onClick={() => navigate('/tops')} className='category-wrapper'>
                        <div className='category-image'>
                            <img src={toppar} alt="toppar kategori" />
                            <figcaption>
                                <p>VISA TOPPAR</p>
                            </figcaption>
                        </div>
                        <b>TOPPAR</b>
                    </div>

                    <div onClick={() => navigate('/skirtsdresses')} className='category-wrapper'>
                        <div className='category-image'>
                            <img src={klänning_kjolar} alt="klänning & kjolar kategori" />
                            <figcaption>
                                <p> VISA KLÄNNINGAR & KJOLAR</p>
                            </figcaption>
                            </div>
                        <b>KLÄNNINGAR & KJOLAR</b>
                    </div>

                    <div onClick={() => navigate('/shirts')} className='category-wrapper'>
                        <div className='category-image'>
                            <img src={skjortor} alt="skjortor kategori" />
                            <figcaption>
                                <p>VISA SKJORTOR</p>
                            </figcaption>
                            </div>
                        <b>SKJORTOR</b>
                    </div>
                    
                    <div onClick={() => navigate('/outerwear')} className='category-wrapper'>
                        <div className='category-image'>
                            <img src={ytterkläder} alt="ytterkläder kategori" />
                            <figcaption>
                                <p>VISA YTTERKLÄDER</p>
                            </figcaption>
                        </div>
                        <b>YTTERKLÄDER</b>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default ShopByCategory;