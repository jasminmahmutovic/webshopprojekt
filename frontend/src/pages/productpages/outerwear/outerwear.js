import React from "react";
import { useState, useEffect } from "react";
import products from "./outerwearProducts";
import DisplayProducts from "../displayProducts";
import OuterwearHeader from "../../../assets/images/Produkt_headers/ytterkläder.png";
import FilterIcon from "../../../assets/icons/filter.png";
import Checkbox from "../../../components/Checkbox";
import "../pageStyles/productStyles.css";

const Outerwear = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <div style={{ width: "auto", height: "auto" }}>
      <div className="header">
        <img
          src={OuterwearHeader}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            marginTop: "0",
            marginBottom: "0",
          }}
          alt="outerwear header"
        />
      </div>
      <div className="containerStyle">
        <div className="sidebar">
          <div className="filterStyle">
            <img
              src={FilterIcon}
              alt="Filter icon"
              className="filterIconStyle"
            />
            <h1>FILTER</h1>
          </div>
          <br />
          <div>
            <h4
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Pris Klasser
            </h4>
            <Checkbox color="white">10kr - 20kr</Checkbox>
            <Checkbox color="white">20kr - 30kr</Checkbox>
            <Checkbox color="white">30kr - 40kr</Checkbox>
            <Checkbox color="white">40kr - 50kr</Checkbox>
            <hr />
            <h4
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Färg
            </h4>
            <div className="colorGroup">
              <div className="colorGroupLeftSide">
                <Checkbox color="#D10000">Röd</Checkbox>
                <Checkbox color="#E36D00">Orange</Checkbox>
                <Checkbox color="#DFC900">Gul</Checkbox>
                <Checkbox color="#01890E">Grön</Checkbox>
                <Checkbox color="#D7009B">Rosa</Checkbox>
                <Checkbox color="#6100DD">Lila</Checkbox>
              </div>
              <div className="colorGroupRightSide">
                <Checkbox color="#0065AE">Blå</Checkbox>
                <Checkbox color="#FFFFFF">Vit</Checkbox>
                <Checkbox color="#828282">Grå</Checkbox>
                <Checkbox color="#000000">Svart</Checkbox>
                <Checkbox color="#482115">Brun</Checkbox>
                <Checkbox color="#C4C4C4">Multi</Checkbox>
              </div>
            </div>
            <hr />
            <h4
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Storlek
            </h4>
            <Checkbox color="white">3XS</Checkbox>
            <Checkbox color="white">2XS</Checkbox>
            <Checkbox color="white">XS</Checkbox>
            <Checkbox color="white">S</Checkbox>
            <Checkbox color="white">M</Checkbox>
            <Checkbox color="white">L</Checkbox>
            <Checkbox color="white">XL</Checkbox>
            <Checkbox color="white">2XL</Checkbox>
            <Checkbox color="white">3XL</Checkbox>
          </div>
        </div>
        <div className="containerRightSide">
          {items.map((item) => (
            <DisplayProducts key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outerwear;
