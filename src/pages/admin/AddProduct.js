import React from "react";
//import axios from 'axios';

import { useState } from "react";
import { FileX } from "react-bootstrap-icons";
import NavbarAdmin from "./components/NavbarAdmin";

//Styling
import "./scss/addproduct.css";

const AddProduct = () => {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("Title");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("Röd");
  const [size1, setSizeOne] = useState("3XS: Not avaliable");
  const [size2, setSizeTwo] = useState("2XS: Not avaliable");
  const [size3, setSizeThree] = useState("XS: Not avaliable");
  const [size4, setSizeFour] = useState("S: Not avaliable");
  const [size5, setSizeFive] = useState("M: Not avaliable");
  const [size6, setSizeSix] = useState("L: Not avaliable");
  const [size7, setSizeSeven] = useState("XL: Not avaliable");
  const [size8, setSizeEight] = useState("2XL: Not avaliable");
  const [size9, setSizeNine] = useState("3XL: Not avaliable");
  const [category, setCategory] = useState("");

  const [chosenCategory, setChosenCategory] = useState("");
  const [isPendig, setIsPending] = useState(false);
  const [list, setList] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const produkt = {
      image,
      title,
      price,
      color,
      size1,
      size2,
      size3,
      size4,
      size5,
      size6,
      size7,
      size8,
      size9,
      category,
      chosenCategory,
    };

    if (image || title || price || color || size1 || size2 || size3 || size4 || size5 || size6 || size7 || size8 || size9 || category || chosenCategory ) {
    setList((ls)=>[...ls, produkt])
    setImage("")
    setTitle("")
    setColor("")
    setSizeOne("")
    setSizeTwo("")
    setSizeThree("")
    setSizeFour("")
    setSizeFive("")
    setSizeSix("")
    setSizeSeven("")
    setSizeEight("")
    setCategory("")
    setChosenCategory("")
  }

    setIsPending(true);


    fetch("http://localhost:3000/changeProduct/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produkt),
    }).then(() => {
      alert(
        "En ny produkt är tillagd " +
          " | " +
          " Titel: " +
          produkt.title +
          " | " +
          " Färg: " +
          produkt.color +
          " | " +
          " Storlek: " +
          produkt.size1 +
          " " +
          produkt.size2 +
          " " +
          produkt.size3 +
          " " +
          produkt.size4 +
          " " +
          produkt.size5 +
          " " +
          produkt.size6 +
          " " +
          produkt.size7 +
          " " +
          produkt.size8 +
          " " +
          produkt.size9 +
          " | " +
          " Kategori: " +
          produkt.category +
          " " +
          produkt.chosenCategory +
          " | " +
          " Pris: " +
          produkt.price +
          "  Se en lista med dina samlade produkter längre ner på sidan."
      );
      setIsPending(false);
    });
  };


  return (
    <div style={{ display: "flex" }}>
      <NavbarAdmin></NavbarAdmin>
      <div className="admin-wrapper">
        <h1 className="myAdminTitle">ADMIN: Lägg til produkt</h1>
        <h4>
          Var vänlig fyll i formuläret för att skapa ett nytt föremål och/eller
          kategori
        </h4>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="admin-section">
            <label for="bild">
              <h4>Bild</h4>
              <input
                className="custom-file-button"
                name="bild"
                type="file"
                accept="imgae/png, image/jpeg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
              <h4>Färg</h4>

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
            <label>
              <h4>Storlek/Storlekar</h4>
            </label>
            <div className="admin-multi">
              <label className="check">
                <input
                  type="checkbox"
                  value="3XS"
                  onChange={(e) => setSizeOne(e.target.value)}
                />
                <span className="sizeP">3XS</span>
              </label>
              <label className="check">
                <input
                  value="2XS"
                  onChange={(e) => setSizeTwo(e.target.value)}
                  type="checkbox"
                />
                <span className="sizeP">2XS</span>
              </label>
              <label className="check">
                <input
                  value="XS"
                  onChange={(e) => setSizeThree(e.target.value)}
                  type="checkbox"
                />
                <span className="sizeP">XS</span>
              </label>
              <label className="check">
                <input
                  value="S"
                  onChange={(e) => setSizeFour(e.target.value)}
                  type="checkbox"
                />
                <span className="sizeP">S</span>
              </label>
              <label className="check">
                <input
                  value="M"
                  onChange={(e) => setSizeFive(e.target.value)}
                  type="checkbox"
                />
                <span className="sizeP">M</span>
              </label>

              <label className="check">
                <input
                  value="L"
                  onChange={(e) => setSizeSix(e.target.value)}
                  type="checkbox"
                />
                <span className="sizeP">L</span>
              </label>
              <label className="check">
                <input
                  value="XL"
                  onChange={(e) => setSizeSeven(e.target.value)}
                  type="checkbox"
                />
                <span className="sizeP">XL</span>
              </label>
              <label className="check">
                <input
                  value="2XL"
                  onChange={(e) => setSizeEight(e.target.value)}
                  type="checkbox"
                />
                <span className="sizeP">2XL</span>
              </label>
              <label className="check">
                <input
                  value="3XL"
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

            <p className="or">
              <u>OR</u>
            </p>

            <label>
              <h4>Välj Kategori</h4>
              <select
                class="custom-select"
                value={chosenCategory}
                onChange={(e) => setChosenCategory(e.target.value)}
              >
                <option value="Byxor">Byxor</option>
                <option value="Toppar">Toppar</option>
                <option value="Klänningar och kjolar">
                  Klänningar och kjolar
                </option>
                <option value="Skjortor">Skjortor</option>
                <option value="Ytterkläder">Ytterkläder</option>
              </select>
            </label>
          </div>

          { ! isPendig && <button className="skapaBtn">Skapa produkt</button>}
          { isPendig && <button disabled className="skapaBtn">Skapar produkt...</button>}
        </form>
        <hr></hr>
        
        {
        list.map((a)=> <div>
          
          <h1 class="product-list-title"><b>Mina Produkter</b></h1>
          <h2 class="product-list-title ">{a.title}</h2>
          <img src={a.image}/>
          <p><b>Pris</b></p>
          <ul>{a.price}kr</ul>
          <p><b>Färger</b></p>
          <ul>{a.color}</ul>
          <p><b>Storlekar</b></p>
          <ul>{a.size1} | {a.size2} | {a.size3} <br/> 
          {a.size4} | {a.size5} | {a.size6} | <br/> 
          {a.size7} | {a.size8} | {a.size9}</ul>
          <p><b>Kategori</b></p>
          <ul>{a.category}</ul>
          <ul>{a.chosenCategory}</ul>
          <hr></hr>

        </div>)
        }

      </div>

        
      </div>
    


  );
};

export default AddProduct;

