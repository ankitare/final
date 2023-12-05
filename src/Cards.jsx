import React from "react";
import {useState} from "react";
import {Card, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

function Cards(props) {
  const [wishlist, setWishlist] = useState(props.wishlist);

  function dateFormat(date){
    const newDate = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    return new Date(date).toLocaleDateString([], newDate);
  }

  return (
    <Card style={{ width: '18rem' }} data-testid="cards">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title data-testid="cardtitle">{props.title}</Card.Title>
        <Card.Text data-testid="cardtext">
          {props.text}
          {props.dateAdded && (
            <div className="date">
              <strong>Date Added to Wishlist: </strong>
              {dateFormat(props.dateAdded)}
            </div>
          )}
        </Card.Text>
        {props.buttonLink}
        {props.showWishlist && (
          <Button className="buttonstyle" onClick={() => {
            props.onClick(props.id, wishlist);
            setWishlist(!wishlist);
          }}>
            <FontAwesomeIcon icon={faGift} className="wishlisticon"/>
            Wishlist
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cards;