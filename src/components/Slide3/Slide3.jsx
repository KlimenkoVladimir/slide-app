import React, { useState } from "react";
import Btn from "../Btn";
import Header from "../Header/Header";
import "./Slide3.css";
import Modal from "../Modal/Modal";
import bottle from "../../img/bottle.png";
import buble1 from "../../img/buble1.png";
import buble2 from "../../img/buble2.png";
import buble3 from "../../img/buble3.png";
import buble4 from "../../img/buble4.png";
import buble5 from "../../img/buble5.png";
import buble6 from "../../img/buble6.png";
import buble7 from "../../img/buble7.png";
import buble8 from "../../img/buble8.png";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";

const Slide3 = ({ setCurrentSlide }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div className="slide3">
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Modal>
      <Header setCurrentSlide={setCurrentSlide}></Header>
      <div className="slide3__container">
        <h3 className="slide3__title1">КЛЮЧЕВОЕ СООБЩЕНИЕ</h3>
        <h2 className="slide3__title2">BRENDXY</h2>
        <div className="slide3__box-left">
          <p className="slide3__text">
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </p>
        </div>
        <div className="slide3__box-right">
          <p className="slide3__text">A arcu cursus vitae</p>
        </div>
        <div className="slide3__btn">
          <Btn text={"Подробнее"} fn={setIsModalOpen} arg={true}></Btn>
        </div>
        <img className="slide3__bottle" src={bottle} alt="bottle" />
        <img className="slide3__buble1" src={buble1} alt="" />
        <img className="slide3__buble2" src={buble2} alt="" />
        <img className="slide3__buble3" src={buble3} alt="" />
        <img className="slide3__buble4" src={buble4} alt="" />
        <img className="slide3__buble5" src={buble5} alt="" />
        <img className="slide3__buble6" src={buble6} alt="" />
        <img className="slide3__buble7" src={buble7} alt="" />
        <img className="slide3__buble8" src={buble8} alt="" />
        <img className="slide3__icon1" src={icon1} alt="" />
        <img className="slide3__icon2" src={icon2} alt="" />
      </div>
    </div>
  );
};

export default Slide3;
