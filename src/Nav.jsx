import { Link } from "react-router-dom";
import "./App.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-2" data-testid="nav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Gifting 101
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/wishlist" className="nav-link">
                My Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new-gifts" className="nav-link">
                Create New Gift
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Gift Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
