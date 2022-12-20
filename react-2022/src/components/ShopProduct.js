import React from'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllProducts } from '../rdx/items/selectors';
import { useParams } from 'react-router-dom';


function ShopProduct() {

    const products = useSelector(selectAllProducts)
    const navigate = useNavigate()
    const {id} = useParams()

    return  products.filter( product => product.id === Number(id) ).map(product => 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.imgSrc} />
    <Card.Body>
      <Card.Title>{product.brand}</Card.Title>
      <Card.Text>
      {product.model}
      </Card.Text>
      <Card.Text>
      Price: {product.price} $
      </Card.Text>
      <Button onClick={() => navigate('/shop')} variant="primary">Back</Button>
    </Card.Body>
    </Card>)
        
    }


export default ShopProduct;