import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Carousel } from "react-bootstrap";

const DisplayProds = (props) => {
  const { product } = props;
  
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cart, setCart } = useContext(CartContext);

  //to not dublicate item, but at the same time add item
  const addProducts = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Card style={{ width: "15rem" }} key={product.id}>
      <Carousel>
              <Carousel.Item>
                <img
                    style={{marginTop: "0", marginBottom: "0"}}
                  className="d-block w-100"
                  src={product.img[0].img}
                  alt={product.title}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img[1].img}
                  alt={product.title}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img[2].img}
                  alt={product.title}
                />
              </Carousel.Item>
            </Carousel>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}:-</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
          <Button variant="success" onClick={() => addProducts(product)}>
            Köp
          </Button>
          <Button variant="outline-primary" onClick={handleShow}>
            Mer info
          </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton key={product.id}>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img[0].img}
                  alt={product.title}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img[1].img}
                  alt={product.title}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.img[2].img}
                  alt={product.title}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <p>{product.description}</p>
          <p>{product.price}:-</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => addProducts(product)}>
            Köp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DisplayProds;
