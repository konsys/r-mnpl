import InventoryItem from "../InventoryItem";
import React from "react";
import { shallow } from "enzyme";

describe("test inventory item", () => {
  it("should render", () => {
    expect(
      shallow(<InventoryItem img={"testImage"} level={1} name={"testName"} />)
    ).toMatchSnapshot();
  });

  it("should render backgroundImg", () => {
    expect(
      shallow(<InventoryItem img={"testImage"} level={1} name={"testName"} />)
        .find("div")
        .get(2).props.style
    ).toHaveProperty("backgroundImage", `url(testImage)`);
  });

  it("should render backgroundImg", () => {
    expect(
      shallow(<InventoryItem img={"testImage"} level={1} name={"testName"} />)
        .find("div")
        .get(4).props.children
    ).toBe("testName");
  });

  it("should render backgroundImg", () => {
    expect(
      shallow(<InventoryItem img={"testImage"} level={1} name={"testName"} />)
        .find("div")
        .get(3).props.className
    ).toStrictEqual(`itemAbout level_${1}`);
    expect(
      shallow(<InventoryItem img={"testImage"} level={2} name={"testName"} />)
        .find("div")
        .get(3).props.className
    ).toStrictEqual(`itemAbout level_${2}`);
  });
});
