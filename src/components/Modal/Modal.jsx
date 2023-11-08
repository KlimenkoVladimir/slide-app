import React, { useState } from "react";
import cross from "../../img/cross.svg";
import btnprev from "../../img/btn_prev.svg";
import btnnext from "../../img/btn_next.svg";
import "./Modal.css";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(2);
  };

  const handlePrevPage = () => {
    setCurrentPage(1);
  };

  const data = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Faucibus pulvinar elementum integer enim",
    "Faucibus pulvinar elementum integer enim",
    "Mi bibendum neque egestas congue quisque egestas diam",
    "Venenatis lectus magna fringilla urna",
    "Venenatis lectus magna fringilla urna",
  ];

  return (
    <div className="modal" style={{ display: isModalOpen ? "block" : "none" }}>
      <div className="modal__box">
        <button
          className="modal__cross"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <img src={cross} alt="cross" />
        </button>
        <div className="modal__title1">Преимущества</div>
        <div className="modal__title2">BRENDXY</div>
        {currentPage === 1 ? (
          <div>
            <div className="modal__point">01</div>
            <p className="modal__text">{data[0]}</p>
            <div className="modal__point">02</div>
            <p className="modal__text">{data[1]}</p>
            <div className="modal__point">03</div>
            <p className="modal__text">{data[2]}</p>
          </div>
        ) : (
          <div>
            <div className="modal__point">04</div>
            <p className="modal__text">{data[3]}</p>
            <div className="modal__point">05</div>
            <p className="modal__text">{data[4]}</p>
            <div className="modal__point">06</div>
            <p className="modal__text">{data[5]}</p>
          </div>
        )}

        <div className="modal__pagination">
          <button
            className="modal__btn"
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            <img src={btnprev} alt="" />
          </button>
          <div
            className={`modal__circle ${
              currentPage === 1 ? "modal__circle--active" : ""
            }`}
          ></div>
          <div
            className={`modal__circle ${
              currentPage === 2 ? "modal__circle--active" : ""
            }`}
          ></div>
          <button
            className="modal__btn"
            onClick={() => {
              setCurrentPage(2);
            }}
          >
            <img src={btnnext} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
