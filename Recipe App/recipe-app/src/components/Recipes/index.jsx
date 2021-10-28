import "./recipies.scss";
import Image from "./images/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg";
import { Card, Button } from "react-bootstrap";
const Recipies = () => {
  const renderedCards = [1, 2, 3].map((card) => {
    return (
      <Card style={{ width: "18rem" }}>
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
    </div>
  );
};

export default Recipies;
