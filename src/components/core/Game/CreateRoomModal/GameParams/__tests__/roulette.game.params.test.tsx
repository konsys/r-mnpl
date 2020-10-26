import React from "react";
import RouletteGameParams from "../RouletteGameParams";
import { shallow } from "enzyme";

describe("Test quick geame params", () => {
  it("should render", () => {
    expect(shallow(<RouletteGameParams isVip />)).toMatchSnapshot();
  });
});
