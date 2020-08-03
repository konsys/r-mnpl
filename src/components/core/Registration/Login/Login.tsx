import { LoginForm } from "../../../views/Registration/LoginForm/LoginForm";
import React from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "./model/TokenModel";
import { loginEffect } from "./model/LoginModel";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponce {
  access_token: string;
}

export const login = (data: ILoginForm) => loginEffect(data);

export const Login = () => {
  const token = getToken();
  return token ? <Redirect to="/game" /> : <LoginForm onSubmit={login} />;
};
