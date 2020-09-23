import { LoginForm } from "../../../views/Registration/LoginForm/LoginForm";
import React from "react";
import { Redirect } from "react-router-dom";
import { loginEffect } from "./model/LoginModel";
import { useStore } from "effector-react";
import { user$ } from "stores/Game/UserModel";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponce {
  access_token: string;
}

export const login = (data: ILoginForm) => loginEffect(data);

export const Login = () => {
  const user = useStore(user$);
  console.log(23424234, user);
  return user ? <Redirect to="/" /> : <LoginForm onSubmit={login} />;
  // return <LoginForm onSubmit={login} />;
};
