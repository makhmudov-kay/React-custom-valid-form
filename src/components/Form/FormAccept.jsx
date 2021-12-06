/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import marker from "../../assets/img/Mask.svg";

const FormAccept = ({onClick, checkTerms}) => {

  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      onClick()
    }
  }

  return (
    <div className="input__check">
      <label htmlFor="checker" className="input__check_label">
        <input
          className="input__check_box"
          type="checkbox"
          id="checker"
          required
          checked={checkTerms}
          onChange={onClick}
          tabIndex="-1"
        />
        <span tabIndex="0" onKeyDown={e => keyDownHandler(e)} className="input__custom">
          <img src={marker} alt="" />
        </span>
        Принимаю <a href="#">условия</a> использования
      </label>
    </div>
  );
};

export default FormAccept;
