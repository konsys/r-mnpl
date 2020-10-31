import * as loginTest from "stores/Game/Login/LoginModel";

import { mount, shallow } from "enzyme";

import { Login } from "../Login";
import { LoginForm } from "components/views/Registration/LoginForm/LoginForm";
import React from "react";
import { Redirect } from "react-router-dom";
import { setUserEvent } from "stores/Game/User/UserModel";
import { testUser } from "testMocks/user";

describe("Room top five test", () => {
  it("should render", () => {
    expect(shallow(<Login />)).toMatchSnapshot();
  });

  it("should render login form", () => {
    setUserEvent(null);
    expect(shallow(<Login />).find(Redirect)).toHaveLength(0);
    expect(shallow(<Login />).find(LoginForm)).toHaveLength(1);
    expect(
      shallow(<Login />)
        .find(LoginForm)
        .get(0).props.onSubmit
    ).toBeDefined();
  });

  it("should render login form", () => {
    setUserEvent(testUser);
    expect(shallow(<Login />).find(Redirect)).toHaveLength(1);
    expect(shallow(<Login />).find(LoginForm)).toHaveLength(0);
    expect(
      shallow(<Login />)
        .find(Redirect)
        .get(0).props.to
    ).toBe("/");
  });

  it("should involve onSubmit", () => {
    const testMock = loginTest as any;
    const loginMock = jest.spyOn(testMock, "loginFx");
    setUserEvent(null);

    mount(<Login />)
      .find(LoginForm)
      .get(0)
      .props.onSubmit({ email: "test@test.ru", password: "testPassworf" });

    expect(loginMock).toHaveBeenCalledTimes(1);
  });
});
