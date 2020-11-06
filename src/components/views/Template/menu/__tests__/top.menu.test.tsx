import React from "react";
import TopMenu from "../TopMenu";
import { Typography } from "@material-ui/core";
import { menuItems } from "../MenuItems";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<TopMenu />)).toMatchSnapshot();
  });

  it("should render all menu items", () => {
    expect(shallow(<TopMenu />).find(Typography)).toHaveLength(
      Object.keys(menuItems).length
    );
  });

  it("should render text in menu item", () => {
    expect(
      shallow(<TopMenu />)
        .find(Typography)
        .get(0).props.children
    ).toBe(Object.keys(menuItems)[0]);
  });
});
