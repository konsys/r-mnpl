import React from "react";
import { LoginForm, ILoginForm } from "../../views/LoginForm/LoginForm";

export const Login = () => (
  <LoginForm onSubmit={(data: ILoginForm) => console.log(222, data)} />
);
