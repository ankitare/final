import {useState, useEffect} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
import "../App.css";
import Cards from "../Cards";
import {updateWishlist} from "../updateWishlist";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
    const gifts = useLoaderData();
    console.log("Initial Gifts State:", gifts);
    const [giftsFilter, setGiftsFilter] = useState(gifts);

    useEffect(() => {
        document.title = `Gifting 101 - Browse Gifts`;
    }, []);

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
                        id={gift.id}
                        key={gift.name}
                        image={gift.image}
                        title={gift.name}
                        text={gift.category}
                        buttonLink= {<Link to={`/gifts/${gift.slug}`}><button className="more-button btn">View Gift Page</button></Link>}
                        showWishlist = {true}
                        isOnWishlist={gift.isOnWishlist}
                        onClick={(id) => {
                            console.log("Clicked!");
                            const isAddingWishlist = !gift.isOnWishlist; 

                            const updatedWishlist = {
                                isOnWishlist: isAddingWishlist,
                            }

                            updateWishlist(id, updatedWishlist).then(
                              () => {
                                  const action = isAddingWishlist ? "added to" : "removed from";
                                  toast.success(`Success! ${gift.name} was ${action} your wishlist :)`);
                              },
                              () => {
                                const action = isAddingWishlist ? "add" : "remove";
                                toast.error(`Sorry, could not ${action} ${gift.name} from your wishlist :(`);
                              }
                            );
                        }}
                    />
                ))}
            </div>
            <ToastContainer position="top-right" autoClose={500} />
            </div>
        </div>
    );
}