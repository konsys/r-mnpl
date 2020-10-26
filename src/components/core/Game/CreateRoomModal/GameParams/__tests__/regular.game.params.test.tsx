import React from "react";
import RegularGameParams from "../RegularGameParams";
import { shallow } from "enzyme";

describe("Test quick geame params", () => {
  it("should render", () => {
    expect(shallow(<RegularGameParams isVip />)).toMatchSnapshot();
  });
});
