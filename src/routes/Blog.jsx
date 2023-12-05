import {useEffect} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
import "../App.css";
import BlogCards from "../BlogCards";

export default function Blog() {
    const blogs = useLoaderData();

    useEffect(() => {
        document.title = `Gifting 101 - Blog`;
    }, []);

    return(
        <div>
            <Nav />
            <div className = "pagecontain">
            <h1 className ="title"> Blog Posts </h1>
            <div className="cardcontain">
                {blogs.map((blog) => (
                    <BlogCards
                        className = "card"
                        id={blog.id}
                        key={blog.title}
                        image={blog.image}
                        title={blog.title}
                        text={blog.author}
                        buttonLink= {<Link to={`/blog/${blog.slug}`}><button className="more-button btn">View Blog</button></Link>}
                        showWishlist = {false}
                    />
                ))}
            </div>
            </div>
        </div>
    );
}