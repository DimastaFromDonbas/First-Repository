import React, { useState } from "react";
import { Card,Button,Modal } from 'react-bootstrap'
import AnnaUz from './AnnaUz.png'

function Anna() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [like,setLike] = useState(0)

    function getLike(){
        setLike(like+1)
    }

    return <> 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src = {AnnaUz} />
    <Card.Body>
      <Card.Title>Anna</Card.Title>
      <Card.Text>
      I'm Anya, I'm 17 years old, Dima loves me and I'm a very beautiful and smart girl
      </Card.Text>
      <Button variant="light" onClick={getLike}>Like {like}</Button>
      <Button variant="danger" onClick={handleShow}>
        Фуууу
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ТЫ ДАУН</Modal.Title>
        </Modal.Header>
        <Modal.Body>СОУ СОРИ НО ТЫ ОБЕБЬЯНА</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            СЛИЛСЯ
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ТОЧНО СЛИЛСЯ
          </Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
</>
}

export default Anna;