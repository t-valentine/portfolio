import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/" id="title">
          h0neymice
        </Link>
        <div className="links">
          <HashLink to="/#illustrations" className="navlinks">
            Illustrations
          </HashLink>
          <HashLink to="/#comics" className="navlinks">
            Comics
          </HashLink>
          <HashLink to="/#about" className="navlinks">
            About
          </HashLink>
          <Link to="/blog" className="navlinks">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
