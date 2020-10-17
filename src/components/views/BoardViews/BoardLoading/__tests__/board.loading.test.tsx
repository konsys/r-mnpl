import { BoardLoading } from "../BoardLoading";
import React from "react";
import { shallow } from "enzyme";

describe("Board loading view", () => {
  it("renders correctly", () => {
    const component = shallow(<BoardLoading />);

    expect(component.contains("wait")).toBeTruthy();
  });
});
