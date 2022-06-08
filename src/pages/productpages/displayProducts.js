import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Carousel } from 'react-bootstrap'
import ToastMessage from './ToastMessage'
import ProductsModal from "./ProductsModal";


//Styling
import { BsArrowClockwise } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import "./displayProducts.scss";

const DisplayProds = (props) => {
  const { product } = props;

  const [show, setShow] = React.useState(false)
  const [showToast, setShowToast] = React.useState(false)
  const [rotate, setRotate] = React.useState(false);
  const [heartClicked, setHeartClicked] = useState()

  //From Context
  const { cart, setCart } = useContext(CartContext);
  const { heartList, setHeartList } = useContext(CartContext);
 

  const handleShow = () => setShow(true);

  //to not dublicate item, but at the same time add item
  const addProducts = (product) => {
    const exist = cart.find((x) => x.id === product.id)

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setShowToast(true)
      setCart([...cart, { ...product, quantity: 1 }])
    }
  };

  const rotateImage = {
    width: rotate ? "500px" : "200px",
    height: rotate ? "300px" : "300px",
    transition: "transform 150ms ease",
  };


 const handlerHeartButton = () => {
  setHeartClicked(!heartClicked)
  const exist = heartList.find((x) => x.id === product.id)
  
  if (exist) {
    setHeartList(
      heartList.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
      )
    );
  } else {
    
    setHeartList([...heartList, { ...product, quantity: 1 }])
  }
  
  alert("din produkt är tillagd i önskelistan")
 }

  return (
    <>
      {showToast && <ToastMessage setShowToast={setShowToast} />}
      {show && (
        <ProductsModal
          product={product}
          setShow={setShow}
          setCart={setCart}
          cart={cart}
          setShowToast={setShowToast}
        />
      )}

      <Card
        style={rotate ? { maxWidth: "500px" } : { maxWidth: "200px" }}
        key={product.id}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <BsArrowClockwise
            style={{
              position: "absolute",
              zIndex: "1000",
              backgroundColor: "#878484a1",
              color: "#FFF700",
              fontSize: "1.5rem",
              margin: "0.5rem",
              borderRadius: "50%",
            }}
            onClick={() => setRotate(!rotate)}
          />
        </div>
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              style={rotateImage}
              className="d-block"
              src={product.img[0].img}
              alt={product.title}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={rotateImage}
              className="d-block"
              src={product.img[1].img}
              alt={product.title}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={rotateImage}
              className="d-block"
              src={product.img[2].img}
              alt={product.title}
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}:-</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button className="buy-btn" onClick={() => addProducts(product)}>
              Köp
            </Button>
            <Button variant="outline-primary" onClick={handleShow}>
              Mer info
            </Button>
            <button 
             className={`heartButton ${heartClicked ? 'heartButtonClick' : ''}`}
            onClick={handlerHeartButton}> <BsFillHeartFill/> </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DisplayProds;
