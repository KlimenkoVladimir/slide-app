import React from "react";
import Btn from "./Btn";
import Header from "./Header/Header";
import "./Slide.css";
import pinksperm1 from "../img/pink_sperm_1.png";
import pinksperm2 from "../img/pink_sperm_2.png";
import bacteria1 from "../img/bacteria1.png";
import spherabl1 from "../img/spherabl1.png";
import spherabl2 from "../img/spherabl2.png";
import sphera1 from "../img/sphera1.png";
import sphera2 from "../img/sphera2.png";
import sphera3 from "../img/sphera3.png";
import sphera4 from "../img/sphera4.png";

const Slide1 = ({ setCurrentSlide }) => {
  return (
    <div className="slide1">
      <Header setCurrentSlide={setCurrentSlide}></Header>
      <h2 className="slide1__hello">ПРИВЕТ,</h2>
      <h1 className="slide1__title">ЭТО НЕ КОММЕРЧЕСКОЕ ЗАДАНИЕ</h1>
      <div className="slide1__btn">
        <Btn text={"Что дальше?"} fn={setCurrentSlide} arg={1}></Btn>
      </div>
      <img className="slide1__pinksperm1" src={pinksperm1} alt="" />
      <img className="slide1__pinksperm2" src={pinksperm2} alt="" />
      <img className="slide1__bacteria1" src={bacteria1} alt="bacteria1" />
      <img className="slide1__spherabl1" src={spherabl1} alt="spherabl1" />
      <img className="slide1__spherabl2" src={spherabl2} alt="spherabl2" />
      <img className="slide1__sphera1" src={sphera1} alt="sphera1" />
      <img className="slide1__sphera2" src={sphera2} alt="sphera2" />
      <img className="slide1__sphera3" src={sphera3} alt="sphera3" />
      <img className="slide1__sphera4" src={sphera4} alt="sphera4" />
    </div>
  );
};

export default Slide1;
