import { Login } from "../../../Login/Login";
import { LoginForm } from "components/views/Registration/LoginForm/LoginForm";
import React from "react";
import { Redirect } from "react-router-dom";
import { setUser } from "stores/Game/User/UserModel";
import { shallow } from "enzyme";
import { testUser } from "testMocks/user";

describe("Room top five test", () => {
  it("should render", () => {
    expect(shallow(<Login />)).toMatchSnapshot();
  });

  it("should render login form", () => {
    setUser(null);
    expect(shallow(<Login />).find(Redirect)).toHaveLength(0);
    expect(shallow(<Login />).find(LoginForm)).toHaveLength(1);
  });

  it("should render login form", () => {
    setUser(testUser);
    expect(shallow(<Login />).find(Redirect)).toHaveLength(1);
    expect(shallow(<Login />).find(LoginForm)).toHaveLength(0);
    expect(
      shallow(<Login />)
        .find(Redirect)
        .get(0).props.to
    ).toBe("/");
  });

  it("should involve onSubmit", () => {
    setUser(null);
  });
});
