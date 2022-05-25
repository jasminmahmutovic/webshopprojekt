import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const DisplayProds = (props) => {

    const { product } = props;
    
    const { cart, setCart } = useContext(CartContext);

     //to not dublicate item, but at the same time add item
     const addProducts = (product) => {
        const exist = cart.find(x => x.id === product.id);
        if(exist) {
            setCart(cart.map((x => x.id === product.id ? {...exist, 
            quantity: exist.quantity + 1} 
            : x)))
        } else {
            setCart([...cart, {...product, quantity: 1}]);
        }
    }

    return (
        <>
            <Card style={{ width: '15rem'}} key={product.id}>
                <Card.Img variant="top" src={product.img} alt={product.title} style={{margin: "0"}} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.price}:-
                            </Card.Text>
                        <Button variant="primary" onClick={() => addProducts(product)}>Köp</Button>
                    </Card.Body>
            </Card>
        </>
    )
}

export default DisplayProds;