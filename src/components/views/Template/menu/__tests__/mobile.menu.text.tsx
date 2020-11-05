import MenuIcon from "@material-ui/icons/Menu";
import MobileMenu from "../MobileMenu";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<MobileMenu />)).toMatchSnapshot();
  });

  it("should render children", () => {
    expect(shallow(<MobileMenu />).find(MenuIcon)).toHaveLength(1);
  });
});
