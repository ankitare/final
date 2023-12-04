import {useState, useEffect} from "react";
// import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Nav";
// import { Form, Button, Col} from "react-bootstrap";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import {addGift} from "../addGift";

export default function CreateGifts() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [slug, setSlug] = useState("");
    const [bio, setBio] = useState("");
    const [amazon, setAmazon] = useState("");
    const [isOnWishlist, setIsOnWishlist] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        document.title = `Gifting 101: Create a Gift`;
    }, []);

    function formValidate(name, image, price, category, bio) {
        let display = {};
        const characters = /[/0123456789!@#$%^&*(),.?":{}|<>]/;
        const placeholderImg = 'https://www.macworld.com/wp-content/uploads/2023/01/macalope-feature-11384296-orig-430.jpg?quality=50&strip=all&w=1024';

        if (!/\d/.test(price)) {
            display.Price = "Price can only be numeric!";
        }
        
        if (characters.test(name)) {
            display.Name = "Name of gift can not have special characters!";
        } else if (/\d/.test(name)) {
            display.Name = "Name of gift can not have numbers!";
        } 

        if (characters.test(category)) {
            display.Category = "Name of gift can not have special characters!";
        } else if (/\d/.test(category)) {
            display.Category = "Name of gift can not have numbers!";
        }
        
        if (bio.length < 20) {
            display.Bio = "Bio for a gift needs to be longer than 20 characters!";
        }

        const img = new Image();
        img.onerror = () => {
            display.Image = "Your gift image link was broken! A placeholder image has been set!";
            setImage(placeholderImg);
        };
        img.src = image;

        return display;

        // if (image link not valid){
        //     display.Image = "Your gift image link was broken! A placeholder image has been set!"
        //     setImage('https://www.macworld.com/wp-content/uploads/2023/01/macalope-feature-11384296-orig-430.jpg?quality=50&strip=all&w=1024');
        // }
    }

    useEffect(() => {
        setSlug(generateSlug(name));
        setAmazon(generateAmazon(name));
    }, [name]);
    
    function generateSlug(name){
        return name.toLowerCase().replace(/\s+/g, '-');
    }

    function generateAmazon(name){
        return name.toLowerCase().replace(/\s+/g, '+');
    }

    const handleSubmission = (event) => {
        event.preventDefault();

        const errors = formValidate(name, image, price, category, bio);

        if (Object.keys(errors).length > 0) {
            console.log("Validation Errors:", errors);
            setValidationErrors(errors);
            return;
        }

        let slug = generateSlug(name);
        let amazon = generateAmazon(name);
        setValidationErrors({});

        const giftData = {
            "image": image,
            "name": name,
            "category": category,
            "slug": slug,
            "price": price,
            "bio": bio,
            "amazon": amazon,
            "isOnWishlist": isOnWishlist
          };
      
          addGift(giftData).then(
            () => {
              setIsSubmitted(true);
              toast.success("Successfully added the gift.");
            },
            () => {
              setIsSubmitted(false);
              toast.error("Failed to add the gift. Please try again!");
            }
        );
    };
        
    return(
        <div>
            {/* {Object.keys(validationErrors).length > 0 && (
                <div>
                    <p>Validation errors:</p>
                    <ul>
                        {Object.values(validationErrors).map((error, index) => (
                        <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )} */}
            <Nav />
            <div className="pagecontain">
                {isSubmitted ? (<div>You just added a new gift to Gifting 101! Here are some details about your submission: <br/>
                    {name} is part of the {category} category. It usually costs {price}. <br/>
                    Here is the generated item slug {slug} and here is the generated item amazon link extension {amazon}. <br/>
                    {/* On your wishlist right now: {isOnWishlist} */}
                </div>): 
                (<form onSubmit={handleSubmission}> 
            
                <h1 className="title"> Create A New Gift</h1>
            
                <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                    Gift Name:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Denim Jacket"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                </div>
        
                <div className="mb-3">
                <label htmlFor="categoryInput" className="form-label">
                    Category:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="categoryInput"
                    placeholder="Clothing"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="priceInput" className="form-label">
                    Price:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="priceInput"
                    placeholder="10"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="imageInput" className="form-label">
                    Image:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="imageInput"
                    placeholder="Image Link for Gift"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="bioInput" className="form-label">
                    Bio:
                </label>
                <textarea
                    rows="3"
                    className="form-control"
                    id="bioInput"
                    placeholder="Details about the Gift"
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                />
                </div>
            
                <button type="submit" className="more-button btn">
                  Submit Gift
                </button>
            
                <button type="button" className="more-button btn btn-space" onClick={() => {
                  setName("");
                  setImage("");
                  setPrice("");
                  setCategory("");
                  setSlug("");
                  setBio("");
                  setAmazon("");
                  setIsOnWishlist(false);
                  setIsSubmitted(false);
                }}>
                  Reset
                </button>
            
              </form>
            )}
                

            </div>
        </div>
    );
}