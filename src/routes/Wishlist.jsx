import {useState} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
import Cards from "../Cards";
import "../App.css";

export default function Wishlist() {
    const gifts = useLoaderData();
    console.log("Gifts:", gifts);
    // const [isOnWishlist, setIsOnWishlist] = useState(gifts);
    const giftsWishlist = gifts.filter((gift) => gift.isOnWishlist);

    return (
        <div>
            <Nav />
            <div className = "banner"/> 
            <div className="pagecontain">
            <h1>Wishlist</h1>
            <div className="cardcontain">
                {giftsWishlist.map((gift) => (
                <Cards
                    key={gift.name}
                    image={gift.image}
                    title={gift.name}
                    text={gift.category}
                    buttonLink={<Link to={`/gifts/${gift.slug}`}><button className="more-button btn">View Gift Page</button></Link>}
                    showWishlist={true}
                    // isOnWishlist = {gift.isOnWishlist}
                    //     onClick={(wishlisted) => {
                    //         const updatedWishlist = {
                    //         isOnWishlist : wishlisted ? false : true,
                    // };
                    //     setIsOnWishlist(updatedWishlist);
                    // }}
                />
                ))}
            </div>
            </div>
        </div>
    );
};
