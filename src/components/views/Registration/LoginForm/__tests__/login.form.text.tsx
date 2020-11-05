import LoginForm from "../LoginForm";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<LoginForm />)).toMatchSnapshot();
  });
});
