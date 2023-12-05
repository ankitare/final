import React from "react";
import {Card} from "react-bootstrap";

function BlogCards(props) {

  return (
    <Card style={{ width: '40rem' }} data-testid="blogcards">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        {props.buttonLink}
      </Card.Body>
    </Card>
  );
}

export default BlogCards;