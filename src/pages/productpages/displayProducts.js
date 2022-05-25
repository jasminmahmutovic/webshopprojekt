import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DisplayProds = (props) => {

    const {product} = props;

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
                    </Card.Body>
            </Card>
        </>
    )
}

export default DisplayProds;