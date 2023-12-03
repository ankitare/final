import {useState} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
import "../App.css";
import Cards from "../Cards";

export default function Home() {
    const gifts = useLoaderData();
    const [giftsFilter, setGiftsFilter] = useState(gifts);
    // const [isOnWishlist, setIsOnWishlist] = useState(gifts);

    return(
        <div>
            <Nav />
            <div className = "pagecontain">
            <h1 className ="title"> Gift Ideas </h1>
            <div className="containsearch">
                <input type="search" placeholder="Search Gifts" className="search-bar rounded-pill"
                    onChange={(event) => {
                        const newGifts = gifts.filter((gift) => {
                            return gift.name.toLowerCase()
                            .includes(event.target.value.toLowerCase());
                    });
                    setGiftsFilter(newGifts);
                    }}
                />
            </div>
            <div className="cardcontain">
                {giftsFilter.map((gift) => (
                    <Cards
                        className = "card"
                        key={gift.name}
                        image={gift.image}
                        title={gift.name}
                        text={gift.category}
                        // buttonText="View Gift Page"
                        buttonLink= {<Link to={`/gifts/${gift.slug}`}><button className="more-button btn">View Gift Page</button></Link>}
                        showWishlist = {true}
                        // isOnWishlist = {gift.isOnWishlist}
                        // onClick={(wishlisted) => {
                        //     const updatedWishlist = {
                        //     isOnWishlist : wishlisted ? false : true,
                        // };
                        //     setIsOnWishlist(updatedWishlist);
                        // }}
                    />
                ))}
            </div>
            {/* <ol>
                {giftsFilter.map((gift) => {
                    return (
                        <li key={gift.name}>
                        <Link to={`/gifts/${gift.slug}`}>{gift.name}</Link>
                        </li>
                    );
                })}
            </ol>  */}
            </div>
        </div>
    );
}