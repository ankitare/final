import React from "react";
import {useState} from "react";
import {Card, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

function Cards(props) {
  const [wishlist, setWishlist] = useState(props.wishlist);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        {props.buttonLink}
        {props.showWishlist && (
          <Button className="buttonstyle" onClick={() => {
            props.onClick(props.id, wishlist);
            setWishlist(!wishlist);
          }}>
            <FontAwesomeIcon icon={faGift} className="wishlisticon"/>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cards;