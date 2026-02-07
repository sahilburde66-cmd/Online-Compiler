import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <Link 
          to="/" 
          className="navbar-logo"
          aria-label="CodeCompiler home"
        >
          <span className="logo-bracket" aria-hidden="true">{"<"}</span>
          Compiler
          <span className="logo-bracket" aria-hidden="true">{"/>"}</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive("/") ? "active" : ""}`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive("/") ? "active" : ""}`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Compiler
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`navbar-link ${isActive("/about") ? "active" : ""}`}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive("/contact") ? "active" : ""}`}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/privacy-policy" 
              className={`navbar-link ${isActive("/privacy-policy") ? "active" : ""}`}
              aria-current={isActive("/privacy-policy") ? "page" : undefined}
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;