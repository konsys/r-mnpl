import React from "react";
import { LoginForm, ILoginForm } from "../../views/LoginForm/LoginForm";

export const Login = () => {
  const login = (data: ILoginForm) => {
    console.log(2222, data);
  };
  return <LoginForm onSubmit={login} />;
};
