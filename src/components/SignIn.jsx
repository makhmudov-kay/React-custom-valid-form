import React from "react";
import Form from "./Form/Form";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="sign">
      <h1 className="sign__title">Регистрация</h1>
      <h3 className="sign__subTitle">
        Уже есть аккаунт? <a tabIndex="1" href="/login">Войти</a>
      </h3>
      <Form />
    </div>
  );
};

export default SignIn;
