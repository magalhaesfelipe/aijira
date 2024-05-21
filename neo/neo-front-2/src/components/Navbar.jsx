import { Link } from "react-router-dom";
import "../styles/general.css";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Icon iconObj={{ name: "Home", symbolName: "library_books" }} />
      <Icon iconObj={{ name: "Search", symbolName: "search" }} />
    </nav>
  );
};

const Icon = ({ iconObj }) => {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="icon-container">
        <span className="material-symbols-outlined">{iconObj.symbolName}</span>
        <div className="icon-name">{iconObj.name}</div>
      </div>
    </Link>
  );
};

export default Navbar;
