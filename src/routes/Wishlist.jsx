import {useState, useEffect} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
import Cards from "../Cards";
import "../App.css";
import {updateWishlist} from "../updateWishlist";
import { ToastContainer, toast } from "react-toastify";

export default function Wishlist() {
    const gifts = useLoaderData();
    console.log("Gifts:", gifts);
    const giftsWishlist = gifts.filter((gift) => gift.isOnWishlist);
    const [wishlist, setWishList] = useState(giftsWishlist);

    useEffect(() => {
        document.title = `Gifting 101 - My Wishlist`;
    }, []);

    return (
        <div>
            <Nav />
            <div className = "banner"/> 
            <div className="pagecontain">
            <h1>Wishlist</h1>
            <div className="cardcontain">
                {giftsWishlist.map((gift) => (
                <Cards
                id={gift.id}
                    key={gift.name}
                    image={gift.image}
                    title={gift.name}
                    text={gift.category}
                    dateAdded={gift.dateAdded}
                    buttonLink={<Link to={`/gifts/${gift.slug}`}><button className="more-button btn">View Gift Page</button></Link>}
                    showWishlist={true}
                    onClick={(giftId) => {
                        const updatedWishlist = {
                          isOnWishlist: gift.isOnWishlist ? false : true,
                        };
                        updateWishlist(giftId, updatedWishlist).then(
                          () => {
                            toast.success(`Success! ${gift.name} was removed from your wishlist :)`);
                            // const updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem.id !== giftId);
                            // setWishlist(updatedWishlist);
                          },
                          () => {
                            toast.error(`Sorry, could not remove gift ${gift.name} from your wishlist :(`);
                          }
                        );
                        const updatedWishlistItems = wishlist.filter((wishlistItem) => wishlistItem.id !== giftId);
                        setWishList(updatedWishlistItems);
                    }}
                />
                ))}
            </div>
            <ToastContainer position="top-right" autoClose={500} />
            </div>
        </div>
    );
};
