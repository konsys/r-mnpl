import React from "react";
import { Redirect } from "react-router-dom";
import { useStore } from "effector-react";
import { user$ } from "stores/Game/User/UserModel";
import { RegistrationForm } from "components/views/Registration/RegistrationForm";

export const Registration = () => {
  const user = useStore(user$);
  console.log(111111111111, user);
  return user ? <Redirect to="/" /> : <RegistrationForm />;
};
