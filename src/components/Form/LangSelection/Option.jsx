import React from "react";
import "./LangSelection.scss"

const Option = ({id, language, onSelectLang, tabIndex, onKeyDownSelectLang}) => {

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {      
      onKeyDownSelectLang(language)
    }
  }

  return (
    <div onKeyDown={e => handleKeyDown(e)} className="option" tabIndex={tabIndex} onClick={() => onSelectLang(language)}>
      <input type="radio" className="radio" id={id} name="lang" />
      <label htmlFor={id}>{language}</label>
    </div>
  );
};

export default Option;
