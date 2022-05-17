// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { useState} from "react";

import './admin.css';

const Admin = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('Title');
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState('Röd');
    const [size1, setSizeOne] = useState('Not avaliable');
    const [size2, setSizeTwo] = useState('Not avaliable');
    const [size3, setSizeThree] = useState('Not avaliable');
    const [size4, setSizeFour] = useState('Not avaliable');
    const [size5, setSizeFive] = useState('Not avaliable');
    const [size6, setSizeSix] = useState('Not avaliable');
    const [size7, setSizeSeven] = useState('Not avaliable');
    const [size8, setSizeEight] = useState('Not avaliable');
    const [size9, setSizeNine] = useState('Not avaliable');
    const [category, setCategory] = useState('Category');
    const [chosenCategory, setChosenCategory] = useState('Byxor');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const produkt = {image, title, price, color, size1, size2, size3, size4, size5, size6, size7, size8, size9, category, chosenCategory };
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(produkt)
        }).then(() => {
            alert("En ny produkt är tillagd " + " | " + " Titel: " + produkt.title + " | " + " Färg: " + produkt.color + " | " + " Storlek: " + produkt.size1 + " " + produkt.size2 + " " + produkt.size3 + " " +  produkt.size4 + " " +  produkt.size5 + " " +  produkt.size6 + " " +  produkt.size7 + " " +  produkt.size8 + " " +  produkt.size9 + " | " + " Kategori: " + produkt.category + " " + produkt.chosenCategory + " | " + " Pris: " + produkt.price )
        })
    }


    return (
        <div className= "admin-wrapper">

        <h1 className="myAdminTitle">ADMIN</h1>
        <h4>Var vänlig fyll i formuläret för att skapa ett nytt föremål och/eller kategori</h4>
        
        <form onSubmit={handleSubmit} className='admin-form'>

            <div className="admin-section">
                <label  for="bild"> 
                <h4>Bild</h4>
                    <input
                        className="custom-file-button"
                        name="bild"
                        type="file"
                        accept="imgae/png, image/jpeg"
                        value={image}
                        onchange={(e) => setImage(e.target.value)}
                    />
                </label>

                <label for="titel">
                    <h4>Titel</h4>
                    <input
                        name="titel"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        
                    />
                </label>
            </div>


            <div className="admin-section">
                <label for="pris">
                    <h4>Pris</h4>
                    <input
                        name="pris"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        
                    />
                </label>

                <label for="color">
                    <h4 >Färg</h4>
                    
                    <select
                        className="custom-select" 
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    >
                        <option value="Röd">Röd</option>
                        <option value="Orange">Orange</option>
                        <option value="Gul">Gul</option>
                        <option value="Grön">Grön</option>
                        <option value="Rosa">Rosa</option>
                        <option value="Blå">Blå</option>
                        <option value="Vit">Vit</option>
                        <option value="Grå">Grå</option>
                        <option value="Svart">Svart</option>
                        <option value="Brun">Brun</option>
                        <option value="Multi">Multi</option>
                    </select>
                </label>
            </div>

 
                <div>
                <label><h4>Storlek/Storlekar</h4></label>
                    <div className='admin-multi'>
                        
                        <label className='check'>
                            
                        <input
                            type="checkbox"
                            value='3XS'
                            onChange={(e) => setSizeOne(e.target.value)}
                            
                        />
                        <span className="sizeP">3XS</span>
                        </label>
                        <label className='check'>
                            
                        <input
                            value='2XS'
                            onChange={(e) => setSizeTwo(e.target.value)}
                            type="checkbox"
                            
                        />
                        <span className="sizeP">2XS</span>
                        </label>
                        <label className='check'>
                            
                        <input
                            value='XS'
                            onChange={(e) => setSizeThree(e.target.value)}
                            type="checkbox"
                            
                        />
                        <span className="sizeP">XS</span>
                        </label>
                        <label className='check'>
                            
                        <input
                            value='S'
                            onChange={(e) => setSizeFour(e.target.value)}
                            type="checkbox"
                            
                        />
                        <span className="sizeP">S</span>
                        </label>
                        <label className='check'>
                            
                        <input
                            value='M'
                            onChange={(e) => setSizeFive(e.target.value)}
                            type="checkbox"
                            
                        />
                        <span className="sizeP">M</span>
                        </label>

                        <label className='check'>
                            
                        <input
                            value='L'
                            onChange={(e) => setSizeSix(e.target.value)}
                            type="checkbox"
                            
                        />
                        <span className="sizeP">L</span>
                        </label>
                        <label className='check'>
                           
                        <input
                            value='XL'
                            onChange={(e) => setSizeSeven(e.target.value)}
                            type="checkbox"
                            
                        />
                         <span className="sizeP">XL</span>
                        </label>
                        <label className='check'>
                            
                        <input
                            value='2XL'
                            onChange={(e) => setSizeEight(e.target.value)}
                            type="checkbox"
                            
                        />
                        <span className="sizeP">2XL</span>
                        </label>
                        <label className='check'>
                            
                        <input
                            value='3XL'
                            onChange={(e) => setSizeNine(e.target.value)}
                            type="checkbox"
                            
                        />
                        <span className="sizeP">3XL</span>
                        </label>
                        
                    </div>
                </div>
                

                <div className="admin-section">
                    <label>
                        <h4>Kategori</h4>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            
                        ></input>
                    </label>

                    <p className="or"><u>OR</u></p>

                    <label>
                        <h4>Välj Kategori</h4>
                        <select
                        class="custom-select"
                            value={chosenCategory}
                            onChange={(e) => setChosenCategory(e.target.value)}
                             
                        >
                            <option value="Byxor">Byxor</option>
                            <option value="Toppar">Toppar</option>
                            <option value="Klänningar och kjolar">Klänningar och kjolar</option>
                            <option value="Skjortor">Skjortor</option>
                            <option value="Ytterkläder">Ytterkläder</option>
                        </select>
                    </label>
                </div>

                <button className="skapaBtn">Skapa produkt</button>
        </form>

    </div>
    )
}

export default Admin;

/* <p>{ title }</p>
<p>{ price }</p>
<p>{ color }</p>
<p>{size1} {size2} {size3} {size4} {size5} {size6} {size7} {size8} {size9}</p>
<p>{category}</p>
<p>{chosenCategory}</p>*/