import { Menu, Typography } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MobileMenu from "../MobileMenu";
import React from "react";
import { menuItems } from "../MenuItems";
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

  it("should render text in menu item", () => {
    expect(
      shallow(<MobileMenu />)
        .find(Typography)
        .get(0).props.children
    ).toBe(Object.keys(menuItems)[0]);
  });
});
