import BuyGallery from "../BuyGallery";
import React from "react";
import { shallow } from "enzyme";
describe("Buy gallery test", () => {
  it("should render", () => {
    expect(shallow(<BuyGallery />)).toMatchSnapshot();
  });
});
