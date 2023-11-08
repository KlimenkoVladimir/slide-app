import React from "react";
import arrow from "../img/Arrow.svg";
import "./Btn.css";

const Btn = ({ text, fn, arg }) => {
  return (
    <button
      className="rectangle"
      onClick={() => {
        console.log(fn, arg);
        fn(arg);
      }}
    >
      <div className="ellipse">
        <img src={arrow} alt="" />
      </div>
      <p className="text">{text}</p>
    </button>
  );
};

export default Btn;
