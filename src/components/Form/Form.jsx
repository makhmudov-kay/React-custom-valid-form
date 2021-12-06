import React from "react";
import FormAccept from "./FormAccept";
import FormBtn from "./FormBtn";
import Inputs from "./Input";
import LangSelection from "./LangSelection/LangSelection";

const Form = () => {
  const [nameValid, setNameValid] = React.useState(false)
  const [emailValid, setEmailValid] = React.useState(false)
  const [phoneValid, setPhoneValid] = React.useState(false)
  const [selectedLang, setSelectedLang] = React.useState(false)
  const [checkTerms, setCheckTerms] = React.useState(false)

  const handleCheckTerms = () => {
    setCheckTerms(!checkTerms)
  }

  const handleInputsValid = (e) => {
    setNameValid(e)
    setEmailValid(e)
    setPhoneValid(e)
  }

  return (
    <form className="form" action="post">
      <Inputs inputsValid={handleInputsValid} />
      <LangSelection onSelectLang={setSelectedLang} />
      <FormAccept onClick={handleCheckTerms} checkTerms={checkTerms} />
      <FormBtn nameValid={nameValid} emailValid={emailValid} phoneValid={phoneValid} selectedLang={selectedLang} checkTerms={checkTerms} />
    </form>
  );
};

export default Form;
