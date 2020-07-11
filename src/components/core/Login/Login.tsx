import React from "react";
import { loginEffect, getToken } from "./model/LoginModel";
import { LoginForm } from "../../views/LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
import { useStore } from "effector-react";
import { userStore } from "../../../stores/UserStore";

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

  console.log(111111, user, getToken());
  return user ? (
    <Redirect from="/" to="/game" />
  ) : (
    <LoginForm onSubmit={login} />
  );
};
