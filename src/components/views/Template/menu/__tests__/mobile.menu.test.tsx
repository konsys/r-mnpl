import { Menu, Typography } from "@material-ui/core";
import MobileMenu, { menuItems } from "../MobileMenu";

import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<MobileMenu />)).toMatchSnapshot();
  });

  it("should render MenuIcon", () => {
    expect(shallow(<MobileMenu />).find(MenuIcon)).toHaveLength(1);
  });

  it("should render Menu", () => {
    expect(shallow(<MobileMenu />).find(Menu)).toHaveLength(1);
  });

  it("should render all menu items", () => {
    expect(shallow(<MobileMenu />).find(Typography)).toHaveLength(
      Object.keys(menuItems).length
    );
  });
});
