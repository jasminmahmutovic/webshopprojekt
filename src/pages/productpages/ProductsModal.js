import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ProductsModal.scss'
import closeBtn from '../../assets/icons/close_black.png'

const ProductsModal = (props) => {
  const { setShow, product, setCart, cart } = props

  const handleClose = () => {
    setShow(false)
  }

  //to not dublicate item, but at the same time add item
  const addProducts = (product) => {
    const exist = cart.find((x) => x.id === product.id)
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x,
        ),
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  return (
    <div className="bg-underlay" onClick={() => handleClose()}>
      <div className="modal-container">
        <div className="product-modal-left">
          <Carousel className="carousel-div">
            <Carousel.Item className="modal-img-div">
              <img src={product.img[0].img} alt={product.title} />
            </Carousel.Item>
            <Carousel.Item className="modal-img-div">
              <img src={product.img[1].img} alt={product.title} />
            </Carousel.Item>
            <Carousel.Item
              className="
              modal-img-div"
            >
              <img src={product.img[2].img} alt={product.title} />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="product-modal-right">
          <div className="title-closeBtn-row">
            <h1>{product.title}</h1>{' '}
            <img
              onClick={() => handleClose()}
              src={closeBtn}
              alt="close button"
            />
          </div>
          <h3>{product.price}kr</h3>
          <p>{product.description}</p>

          <div className="product-modal-left-bottom-info">
            <p>Färg: {product.color}</p>
            <select name="Välj storlek">
              <option value="">Välj storlek</option>
              <option value="3XS">3XS</option>
              <option value="2XS">2XS</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
            </select>
            <button onClick={() => addProducts(product)}>KÖP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsModal
