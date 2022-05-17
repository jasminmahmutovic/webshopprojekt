// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";

import './admin.scss';

const Admin = () => {
    return (
        <div className= "admin-wrapper">

        <h1>ADMIN</h1>
        <h4>Var vänlig fyll i formuläret för att skapa ett nytt föremål och/eller kategori</h4>
        
        <form className='admin-form'>
            <div className="admin-section">
                <label for="bild"> 
                <h4>Bild</h4>
                    <input
                        name="bild"
                        type="file"
                        accept="imgae/png, image/jpeg"
                        required
                    />
                </label>

                <label for="titel">
                    <h4>Titel</h4>
                    <input
                        name="titel"
                        type="text"
                        required
                    />
                </label>
            </div>

            <div className="admin-section">
                <label for="pris">
                    <h4>Pris</h4>
                    <input
                        name="pris"
                        type="text"
                        required
                    />
                </label>

                <label for="color">
                    <h4>Färg</h4>
                    <select
                        name="color"
                        multiple="multiple"
                        required
                    >
                        <option value="röd">Röd</option>
                        <option value="orange">Orange</option>
                        <option value="gul">Gul</option>
                        <option value="grön">Grön</option>
                        <option value="rosa">Rosa</option>
                        <option value="blå">Blå</option>
                        <option value="vit">Vit</option>
                        <option value="grå">Grå</option>
                        <option value="svart">Svart</option>
                        <option value="brun">Brun</option>
                        <option value="multi">Multi</option>
                    </select>
                </label>
            </div>

            
                
                <div>
                <label><h4>Storlek/Storlekar</h4></label>
                    <div className='admin-multi'>
                        
                        <label className='check'>
                            3XS
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        <label className='check'>
                            2XS
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        <label className='check'>
                            XS
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        <label className='check'>
                            S
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        <label className='check'>
                            M
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>

                        <label className='check'>
                            L
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        <label className='check'>
                            XL
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        <label className='check'>
                            2XL
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        <label className='check'>
                            3XL
                        <input
                            multiple="multiple"
                            type="checkbox"
                            required
                        />
                        </label>
                        
                    </div>
                </div>
                

                

                <div className="admin-section">
                    <label>
                        <h4>Kategori</h4>
                        <input
                            type="text"
                            required
                        ></input>
                    </label>

                    <p>OR</p>

                    <label>
                        <h4>Välj Kategori</h4>
                        <select
                            multiple="multiple"
                            required 
                        >
                            <option value="byxor">Byxor</option>
                            <option value="toppar">Toppar</option>
                            <option value="klänningarochkjolar">Klänningar och kjolar</option>
                            <option value="skjortor">Skjortor</option>
                            <option value="ytterkläder">Ytterkläder</option>
                        </select>
                    </label>
                </div>

        </form>

        <button>Skapa</button>

    </div>
    )
}

export default Admin;