import QuickGameParams from "../QuickGameParams";
import React from "react";
import { shallow } from "enzyme";

describe("Test quick geame params", () => {
  it("should render", () => {
    expect(shallow(<QuickGameParams isVip />)).toMatchSnapshot();
  });
});
