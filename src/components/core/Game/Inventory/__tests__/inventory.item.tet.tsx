import InventoryItem from "../InventoryItem";
import React from "react";
import { shallow } from "enzyme";

describe("test inventory item", () => {
  it("should render", () => {
    expect(
      shallow(<InventoryItem img={"testImage"} level={1} name={"testName"} />)
    ).toMatchSnapshot();
  });
});
