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
        document.title = `Gifting 101 - Create a Gift`;
    }, []);

    function formValidate(name, image, price, category, bio) {
        let display = {};
        const characters = /[/0123456789!@#$%^&*(),.?":{}|<>]/;
        const placeholderImg = 'https://www.macworld.com/wp-content/uploads/2023/01/macalope-feature-11384296-orig-430.jpg?quality=50&strip=all&w=1024';

        if (!/\d/.test(price)) {
            display.Price = "Price can only be numeric!";
        } else if (price.length < 1){
            display.Price = "Revise your price to be at least 1 number!";
        }
        
        if (characters.test(name)) {
            display.Name = "Name of gift can not have special characters!";
        } else if (/\d/.test(name)) {
            display.Name = "Name of gift can not have numbers!";
        } else if (name.length < 3){
            display.Name = "Revise your gift name to be at least 3 characters!";
        }

        if (characters.test(category)) {
            display.Category = "Name of gift can not have special characters!";
        } else if (/\d/.test(category)) {
            display.Category = "Name of gift can not have numbers!";
        } else if (category.length < 3){
            display.Category = "Revise your category name to be at least 3 characters!";
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
              toast.success(`Successfully added the gift ${giftData.name}`);
            },
            () => {
              setIsSubmitted(false);
              toast.error(`Unsuccessfully deleted the gift ${giftData.name}. Please try again!`);
            }
        );
    };
        
    return(
        <div>
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
                {validationErrors.Name && (
                    <p className="text-danger">{validationErrors.Name}</p>
                )}
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
                {validationErrors.Category && (
                    <p className="text-danger">{validationErrors.Category}</p>
                )}
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
                {validationErrors.Price && (
                    <p className="text-danger">{validationErrors.Price}</p>
                )}
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
                {validationErrors.Image && (
                    <p className="text-danger">{validationErrors.Image}</p>
                )}
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
                {validationErrors.Bio && (
                    <p className="text-danger">{validationErrors.Bio}</p>
                )}
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
            <ToastContainer position="top-right" autoClose={500} />
        </div>
    );
}