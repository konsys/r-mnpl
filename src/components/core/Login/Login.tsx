import React from "react";
import { loginEffect, LoginStore } from "./model/LoginModel";
import { LoginForm } from "../../views/LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { useStore } from "effector-react";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponce {
  access_token: string;
}

const login = (data: ILoginForm) => loginEffect(data);

export const Login = () => {
  let history = useHistory();
  const loginState = useStore(LoginStore);
  if (loginState && loginState.access_token) {
    history.push("/game");
  }

  return <LoginForm onSubmit={login} />;
};
