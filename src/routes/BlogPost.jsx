import {useEffect} from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
import {Image, Row, Col} from 'react-bootstrap';
import "../App.css";

export default function BlogPost() {
    const blogData = useLoaderData();
    const blog = blogData[0];
    console.log(blogData);

    useEffect(() => {
        document.title = `Gifting 101 - ${blog.title}`;
    }, [blog.title]);

    return(
        <div>
            <Nav />
            <div className = "banner"/> 
            <div className = "pagecontain">
                <Link to={`/blog`} className="linkcolor">Read Another Blog</Link>
                <Row>
                    <Col>
                    <h1 className="giftname">{blog.title}</h1>
                    <h5>By {blog.author}</h5>
                    <h6 className="blogcontent">{blog.content}</h6>
                    </Col>
                    <Col className="gift-content">
                    <Image src={blog.image} className="imgsize"/>
                    </Col>
                </Row>
             </div>
        </div>
    );
}