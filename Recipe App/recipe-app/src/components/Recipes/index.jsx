import "./recipies.scss";
import Image from "./images/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
const Recipies = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderedCards = [1, 2, 3].map((card) => {
    return (
      <Card onClick={handleShow} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{card} description</Card.Text>
          <Button variant="primary">Action Button</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="RecipiesContainer">
      <h1>Recipies</h1>
      <div className="RecipiesCards">{renderedCards}</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Detailed description about the food</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recipies;
