import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Carousel } from 'react-bootstrap'
import ToastMessage from './ToastMessage'
import { BsArrowClockwise } from "react-icons/bs";
import ProductsModal from "./ProductsModal";
import "./displayProducts.scss";
import OutOfStock from './outOfStock'


const DisplayProds = (props) => {
  const { product } = props;

  const [show, setShow] = React.useState(false)
  const [showToast, setShowToast] = React.useState(false)
  const [rotate, setRotate] = React.useState(false);
  const [outOfStock, setOutOfStock] = React.useState(false);

  //check products that are no longer in stock
  const stock = product.quantity === 0;

  const handleShow = () => setShow(true);
  const { cart, setCart } = useContext(CartContext);


  //to not dublicate item, but at the same time add item
  const addProducts = (product) => {
    const exist = cart.find((x) => x.id === product.id)

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else if (product.quantity === 0) { 
      setOutOfStock(true)
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

  return (
    <>
      {outOfStock && <OutOfStock setOutOfStock={setOutOfStock} />}
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
          <div className='title-price-outOfStock-row'>
            <div className='title-price-container'>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}:-</Card.Text>
            </div>
            {stock && (<p style={{ fontSize: "10px", }}>OTILLGÄNGLIG</p>)}
            </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button className="buy-btn" 
              onClick={() => addProducts(product)}
            >
              Köp
            </Button>
            <Button variant="outline-primary" onClick={handleShow}>
              Mer info
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DisplayProds;
