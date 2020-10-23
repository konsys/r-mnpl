import { M1tv } from "../M1tv";
import React from "react";
import { shallow } from "enzyme";

describe("Test m1", () => {
  it("should render properly", () => {
    expect(shallow(<M1tv />)).toMatchSnapshot();
  });
});
