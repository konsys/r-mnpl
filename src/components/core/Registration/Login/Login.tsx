import { LoginForm } from "../../../views/Registration/LoginForm/LoginForm";
import React from "react";
import { Redirect } from "react-router-dom";
import { loginFx } from "stores/Game/Login/LoginModel";
import { useStore } from "effector-react";
import { user$ } from "stores/Game/User/UserModel";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponce {
  access_token: string;
}

export const onSubmit = (data: ILoginForm) => {
  console.log(232323232323, data);
  return loginFx(data);
};

export const Login = () => {
  const user = useStore(user$);
  return user ? <Redirect to="/" /> : <LoginForm onSubmit={onSubmit} />;
};
