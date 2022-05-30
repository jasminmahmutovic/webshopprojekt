import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const DisplayProds = (props) => {
    const {product} = props;

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '15rem'}} key={product.id}>
                <Card.Img variant="top" src={product.img} alt={product.title} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.price}:-
                            </Card.Text>
                        <Button variant="primary" onClick="">Köp</Button>
                        <Button variant="primary" onClick={handleShow}>
                            Mer info
                        </Button>
                    </Card.Body>
            </Card>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton key={product.id}>
                        <Modal.Title>{product.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <img style={{width: "100px", height: "200px",}} src={product.img} alt={product.title} />
                        </div>
                        <p>{product.description}</p>
                        <p>{product.price}:-</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Köp
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}

export default DisplayProds;