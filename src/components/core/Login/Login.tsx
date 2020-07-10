import React from "react";
import { loginEffect, LoginStore } from "./model/LoginModel";
import { LoginForm } from "../../views/LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
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
  const loginState = useStore(LoginStore);

  return loginState && loginState.access_token ? (
    <Redirect from="/" to="/game" />
  ) : (
    <LoginForm onSubmit={login} />
  );
};
