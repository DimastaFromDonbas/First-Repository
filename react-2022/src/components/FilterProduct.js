import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function FilterProduct({processSearchProduct,processSearchProductMax,seachProductPrice}) {

    return (
    <>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="1" style={{paddingLeft: "24px"}}>
            Price low
            </Form.Label>
        <Col sm="11">
            <Form.Control value={seachProductPrice} type="number"  onChange={processSearchProduct}/>
        </Col>
        <Form.Label column sm="1" style={{paddingLeft: "24px",paddingRight: "6px"}}>
            Price higth
        </Form.Label>
         <Col sm="11">
            <Form.Control type="number" style={{with: "98%"}} onKeyUp={(e) => e.key === 'Enter' && processSearchProductMax(e)} onBlur={processSearchProductMax}/>
        </Col>
        </Form.Group>
    </>
    )
}

export default FilterProduct;