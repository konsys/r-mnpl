import { LoginForm } from "../LoginForm";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  const onSubmit = jest.fn();
  it("should render", () => {
    expect(shallow(<LoginForm onSubmit={onSubmit} />)).toMatchSnapshot();
  });

  it("should render", () => {
    shallow(<LoginForm onSubmit={onSubmit} />)
      .find(".button-grass")
      .simulate("click");
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
