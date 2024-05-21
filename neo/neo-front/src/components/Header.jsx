import React from "react";
import "./styles/general.css"
import "./styles/header.css";

const Header = () => {
  return (
    <>
      <header className="titleHead">
        <div className="title-container">
          <p>NEO</p>
        </div>
      </header>

      <div className="bar-header">
        <div className="barheader-container">
          <div className="moveLine">
            <p>LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY LIBRARY</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;