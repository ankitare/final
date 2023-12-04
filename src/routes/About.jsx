import {useEffect} from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Cards from "../Cards";
import "../App.css";

export default function About() {
    useEffect(() => {
        document.title = `Gifting 101 - About Us`;
    }, []);

    return(
        <div>
            <Nav />
        <div className = "pagecontain">
            <h1> About Us </h1>
            Welcome to the ultimate gift exchange hosting platform! If you're someone who wants to simplify gift giving for your friends and loved ones, you've come to the right place. We know that gift giving can be a stressful process, especially during the holiday season. That's why we've created this platform to provide you with a guideline of what people want, so you can host gift exchanges throughout the year without any hassle. <br/>
            <br/>
            Our platform is designed for people who are interested in hosting gift exchanges around the holiday season and throughout the year. With our platform, you can simplify the gift-giving process and make it less stressful. Our website allows you to add your friends and keep track of their wish lists, making it easier for you to know what they want. Plus, you can create your own wish list and share it with your friends, so they know exactly what to get you.
            <div className = "cardcontain">
                <Cards
                    image="https://www.billboard.com/wp-content/uploads/2022/12/christmas-holiday-gifts-2022-billboard-1548.jpg?w=942&h=623&crop=1"
                    title="Gifts Ideas"
                    text="Here you can browse through some curated gift ideas."
                    // buttonText="Explore Gifts"
                    buttonLink= {<Link to="/"><button className="more-button btn">Explore Gifts</button></Link>}
                    showBookmark = {false}
                />
                <Cards
                    image="https://cf.ltkcdn.net/www/images/orig/349255-2121x1414-gift-exchange-1354243510.jpg"
                    title="Wishlist"
                    text="Here you can view and edit your gift preferences and wishlist."
                    // buttonText="Explore Wishlist"
                    buttonLink= {<Link to="/wishlist"><button className="more-button btn">Explore Wishlist</button></Link>}
                    showBookmark = {false}
                />
                <Cards
                    image="https://hips.hearstapps.com/hmg-prod/images/how-to-wrap-a-gift-like-a-pro-1650557383.jpg"
                    title="New Gifts"
                    text="Here you can add new gifts and details associated with the gifts."
                    // buttonText="Create Gift Entries"
                    buttonLink= {<Link to="/new-gifts"><button className="more-button btn">Create Gift Entries</button></Link>}
                    showBookmark = {false}
                /> 
                {/* reviews instead maybe */}
            </div>
        </div>
        </div>
    );
}