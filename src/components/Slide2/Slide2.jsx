import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./Slide2.css";
import pinksperm3 from "../../img/pink_sperm_3.png";

const Slide2 = ({ setCurrentSlide }) => {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setPosition(newValue);

    const slide2Box = document.querySelector(".slide2__box");
    if (slide2Box) {
      slide2Box.scrollTop =
        ((100 - newValue) * (slide2Box.scrollHeight - slide2Box.clientHeight)) /
        100;
    }
  };

  return (
    <div className="slide2">
      <Header setCurrentSlide={setCurrentSlide} />
      <div className="slide2__container">
        <h2 className="slide2__header">текст сообщения</h2>
        <div className="slide2__box">
          <p className="slide2__text">
            <span className="slide2__text--bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </span>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
            tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
            felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
            dignissim diam quis enim lobortis. Est sit amet facilisis magna.
            Neque laoreet suspendisse interdum consectetur libero id. Nec
            ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
            nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
            amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
            turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere.
          </p>
          <br />
          <p className="slide2__text">
            {" "}
            Amet justo donec enim diam vulputate ut pharetra sit. Risus
            ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
            ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna
            eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
            convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris
            sit amet massa vitae tortor condimentum lacinia quis vel.
          </p>
        </div>
      </div>
      <img className="slide2__pinksperm3" src={pinksperm3} alt="pinksperm3" />
    </div>
  );
};

export default Slide2;
