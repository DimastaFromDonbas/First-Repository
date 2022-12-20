import React from "react";
import {Card, Button,Col, Badge} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseProductValue,decreaseProductValue } from "../rdx/items/actions";


function Product({product, selectProduct}){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return <Col xs={12} sm={6} md={4} lg={3}><Card>
  <Card.Img variant="top" src={product.imgSrc} />
  <Card.Body>
    <Card.Title style={{cursor: 'pointer'}} onClick={() => navigate(`/shop/${product.id}`) }>{product.brand} {product.model}</Card.Title>
    <Card.Text>
       Price: {product.price} $
    </Card.Text>
    {product.selected ?
    <Button variant="danger" onClick={() => selectProduct(product.id, false)}>Remove to Card</Button>:
    <Button variant="success" onClick={() => selectProduct(product.id, true)}>Add to Card</Button>}
    {product.selected ? <>
    <Badge style={{cursor:"pointer"}} onClick={() => dispatch(decreaseProductValue(product.id))}>-</Badge> {product.value} <Badge style={{cursor:"pointer"}} onClick={() => dispatch(increaseProductValue(product.id))}>+</Badge> 
    </>: ''
    }
  </Card.Body>
</Card></Col>
}

export default Product;

