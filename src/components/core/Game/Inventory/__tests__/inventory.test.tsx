import { logout, setUserEvent } from "stores/Game/User/UserModel";
import { testAvatarUser, testUser } from "testMocks/user";

import Alert from "@material-ui/lab/Alert";
import { Grid } from "@material-ui/core";
import Inventory from "../Inventory";
import { Link } from "react-router-dom";
import React from "react";
import { shallow } from "enzyme";

describe("Buy gallery test", () => {
  it("should render Inventory", () => {
    logout();
    expect(shallow(<Inventory />)).toMatchSnapshot();
  });

  it("should render Inventory", () => {
    setUserEvent(testUser);
    expect(shallow(<Inventory />)).toMatchSnapshot();
  });

  it("should show not logged page", () => {
    logout();
    const wrap = shallow(<Inventory />);
    expect(wrap.find(Alert)).toHaveLength(1);
    expect(wrap.find(Grid)).toHaveLength(1);
    expect(wrap.find(Alert).text()).toBe("Login to manage your inventory");
  });

  it("should show logged page", () => {
    setUserEvent(testUser);
    const wrap = shallow(<Inventory />);
    expect(wrap.find(Alert)).toHaveLength(0);
    expect(wrap.find(Grid)).toHaveLength(18);
  });

  it("should show logged page", () => {
    setUserEvent(testUser);
    expect(shallow(<Inventory />).find(Link)).toHaveLength(1);
    setUserEvent(testAvatarUser);
    expect(shallow(<Inventory />).find(Link)).toHaveLength(2);
  });

  it("should show links", () => {
    setUserEvent(testAvatarUser);
    const wrap = shallow(<Inventory />);
    expect(wrap.find(Link).get(0).props.to).toBe(
      `/profile/${testAvatarUser.userId}`
    );
    expect(wrap.find(Link).get(1).props.to).toStrictEqual(
      `/profile/${testAvatarUser.userId}`
    );
  });
});
