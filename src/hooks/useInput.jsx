import React from "react";

const useValidation = (value, validations) => {
  const [isEmailError, setEmailError] = React.useState(false)
  const [isNameError, setNameError] = React.useState(false)
  const [isNumberError, setNumberError] = React.useState(false)

  React.useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case "isNumber":
          const regNumber = /(^\+\d-?\(?\d\d\d\)?-?\d\d\d-?\d\d-?\d\d)$/;
          String(value).match(regNumber) ? setNumberError(false) : setNumberError(true)
          break;
        case "isName":
          const reg = /(^[a-z\p{sc=Cyrillic}]+)((\s+)?(-+)?([a-z\p{sc=Cyrillic}]+)?)+?$/iu
          String(value).match(reg) ? setNameError(false) : setNameError(true)
          break;
        case "isEmail":
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(String(value)) ? setEmailError(false) : setEmailError(true)
          break;        
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {
    isEmailError,
    isNameError,
    isNumberError
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setDirty] = React.useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true)
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
