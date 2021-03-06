import { Grid, Select, Typography } from "@material-ui/core";
import { logout, setUser } from "stores/Game/User/UserModel";
import { testAvatarUser, testUser } from "testMocks/user";

import Alert from "@material-ui/lab/Alert";
import Inventory from "../Inventory";
import InventoryItem from "../InventoryItem";
import { InventoryType } from "types/types";
import { Link } from "react-router-dom";
import React from "react";
import { createImgPath } from "utils/fields.utils";
import { setInventory } from "../../../../../stores/Game/Inventory/InventoryModel";
import { shallow } from "enzyme";
import { testInventory } from "testMocks/inventory";

describe("Buy gallery test", () => {
  it("should render Inventory", () => {
    logout();
    expect(shallow(<Inventory />)).toMatchSnapshot();
  });

  it("should render Inventory", () => {
    setUser(testUser);
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
    setUser(testUser);
    const wrap = shallow(<Inventory />);
    expect(wrap.find(Alert)).toHaveLength(0);
    expect(wrap.find(Grid)).toHaveLength(18);
  });

  it("should show logged page", () => {
    setUser(testUser);
    expect(shallow(<Inventory />).find(Link)).toHaveLength(1);
    setUser(testAvatarUser);
    expect(shallow(<Inventory />).find(Link)).toHaveLength(2);
  });

  it("should show links", () => {
    setUser(testAvatarUser);
    const wrap = shallow(<Inventory />);
    expect(wrap.find(Link).get(0).props.to).toBe(
      `/profile/${testAvatarUser.userId}`
    );
    expect(wrap.find(Link).get(1).props.to).toStrictEqual(
      `/profile/${testAvatarUser.userId}`
    );
  });

  it("should show inventory num", () => {
    setUser(testAvatarUser);
    setInventory(testInventory);

    const wrap = shallow(<Inventory />);
    expect(wrap.find(Typography).get(2).props.children).toBe(
      testInventory.inventoryQuantity
    );
  });

  it("shouldn`t show inventory", () => {
    setUser(testAvatarUser);
    setInventory(null);

    const wrap = shallow(<Inventory />);
    expect(wrap.find(InventoryItem)).toHaveLength(0);
  });

  it("should show inventory", () => {
    setUser(testAvatarUser);
    setInventory(testInventory);

    const wrap = shallow(<Inventory />);
    expect(wrap.find(InventoryItem)).toHaveLength(testInventory.fields.length);
  });

  it("should show inventory props", () => {
    setUser(testAvatarUser);
    setInventory(testInventory);

    const wrap = shallow(<Inventory />)
      .find(InventoryItem)
      .get(0).props;
    expect(wrap.name).toBe(testInventory.fields[0].name);
    expect(wrap.level).toBe(testInventory.fields[0].level);
    expect(wrap.img).toBe(
      createImgPath(testInventory.fields[0].imgSrc || "somethingGoesWrong")
    );
  });

  it("should select work", () => {
    setUser(testAvatarUser);
    setInventory(testInventory);

    const wrap = shallow(<Inventory />);

    wrap.find(Select).simulate("change", {
      target: { value: InventoryType.BADGES },
    });

    expect(wrap.find(Select).get(0).props.value).toStrictEqual(
      InventoryType.BADGES
    );

    wrap.find(Select).simulate("change", {
      target: { value: InventoryType.FIELDS },
    });

    expect(wrap.find(Select).get(0).props.value).toStrictEqual(
      InventoryType.FIELDS
    );

    wrap.find(Select).simulate("change", {
      target: { value: null },
    });

    expect(wrap.find(Select).get(0).props.value).toStrictEqual(null);
  });
});
