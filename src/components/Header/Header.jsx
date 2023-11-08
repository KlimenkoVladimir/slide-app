import React from "react";
import home from "../../img/Home.svg";
import "./Header.css";

const Header = ({ setCurrentSlide }) => {
  return (
    <div className="header">
      <button className="header__home" onClick={() => setCurrentSlide(0)}>
        <img src={home} alt="home" />
      </button>
    </div>
  );
};

export default Header;
