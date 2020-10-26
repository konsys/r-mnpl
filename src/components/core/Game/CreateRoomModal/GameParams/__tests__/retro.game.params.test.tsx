import React from "react";
import RetroGameParams from "../RetroGameParams";
import { shallow } from "enzyme";

describe("Test quick geame params", () => {
  it("should render", () => {
    expect(shallow(<RetroGameParams isVip />)).toMatchSnapshot();
  });
});
