import Logo from "../Logo";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<Logo />)).toMatchSnapshot();
  });

  it("should render children", () => {
    expect(shallow(<Logo />).find("svg")).toHaveLength(1);
  });
});
