import { LoginForm } from "components/views/Registration/LoginForm/LoginForm";
import React from "react";
import { Redirect } from "react-router-dom";
import { useStore } from "effector-react";
import { user$ } from "stores/Game/User/UserModel";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponce {
  accessToken: string;
  refreshToken: string;
}

export const Login = () => {
  const user = useStore(user$);
  return user ? <Redirect to="/" /> : <LoginForm />;
};
