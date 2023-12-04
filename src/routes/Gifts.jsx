import {useState, useEffect} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
import {Image, Row, Col} from 'react-bootstrap';
import { deleteGift } from "../deleteGift";

export default function Gifts() {
    const giftData = useLoaderData();
    const gift = giftData[0];
    console.log(giftData);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        document.title = `Gifting 101: Gift Page`;
    }, []);

    // const handleDelete = async () => {
    //     try {
    //       await deleteGift(gift.id);
    //       setIsDeleted(true);
    //     } catch (error) {
    //       console.error("Error deleting gift:", error);
    //     }
    // };

    return(
        <div>
            <Nav />
            <div className = "banner"/> 
            <div className = "pagecontain">
                <Link to={`/`} className="linkcolor">Keep Browsing Gift Ideas</Link>
                <Row>
                    <Col>
                    <h1 className="giftname">{gift.name}</h1>
                    <h6>{gift.bio}</h6>
                    <h5 className="tags">Average Price: ${gift.price}</h5>
                    <h5>Gift Category: {gift.category}</h5>
                    {/* {<Link to={`https://www.amazon.com/s?k=${gift.amazon}`}><button className="more-button btn add">Add to Wishlist</button></Link>} */}
                    {<Link to={`https://www.amazon.com/s?k=${gift.amazon}`}><button className="more-button btn add">Browse {gift.name}s</button></Link>}
                    <button className="more-button btn add">Delete {gift.name}</button>
                    </Col>
                    <Col className="gift-content">
                    <Image src={gift.image} className="imgsize"/>
                    </Col>
                </Row>
             </div>
        </div>
    );
}