import React from "react";
import ShuffleGameParams from "../ShuffleGameParams";
import { shallow } from "enzyme";

describe("Test quick geame params", () => {
  it("should render", () => {
    expect(shallow(<ShuffleGameParams isVip />)).toMatchSnapshot();
  });
});
