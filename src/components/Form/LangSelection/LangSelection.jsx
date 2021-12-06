import React from "react";
import "./LangSelection.scss";
import Option from "./Option";

const langs = [
  { id: "russian", language: "Русский", tabIndex: "6" },
  { id: "english", language: "Английский", tabIndex: "7" },
  { id: "china", language: "Китайский", tabIndex: "8" },
  { id: "spanish", language: "Испансикй", tabIndex: "9" },
];

const LangSelection = ({onSelectLang}) => {
  const [isActive, setIsActive] = React.useState(false)
  const [selectedLang, setSelectedLang] = React.useState("")

  const handleActiveClass = () => {
    setIsActive(!isActive)
  }

  const onSelectedLanguage = (language) => {
    setSelectedLang(language)
    setIsActive(false)
    onSelectLang(true)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setIsActive(!isActive)
    }
  }

  const onKeyDownSelectLang = (lang) => {
    setSelectedLang(lang)
    setIsActive(false)
  }

  return (
    <div>
      <h2>Язык</h2>
      <div className="select-box">
        <div className={`${isActive ? "options-container active" : "options-container"}`}>
          {langs.map((lang) => (
            <Option onKeyDownSelectLang={onKeyDownSelectLang} key={lang.id} id={lang.id} tabIndex={isActive && lang.tabIndex} language={lang.language} isActive={isActive} onSelectLang={onSelectedLanguage} />
          ))}
        </div>
        <div tabIndex="5" onKeyDown={(e) => handleKeyDown(e)} onClick={handleActiveClass} className="selected" >{selectedLang ? selectedLang : <span>Язык</span>}</div>
      </div>
    </div>
  );
};

export default LangSelection;
