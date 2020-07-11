import React from "react";
import { loginEffect } from "./model/LoginModel";
import { LoginForm } from "../../views/LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
import { useStore } from "effector-react";
import { userStore } from "../../../stores/UserStore";
import { getToken } from "./model/TokenModel";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponce {
  access_token: string;
}

export const login = (data: ILoginForm) => loginEffect(data);

export const Login = () => {
  const user = useStore(userStore);
  const token = getToken();
  return user || token ? (
    <Redirect from="/" to="/game" />
  ) : (
    <LoginForm onSubmit={login} />
  );
};
