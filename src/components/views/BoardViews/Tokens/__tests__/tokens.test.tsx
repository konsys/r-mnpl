import React from "react";
import { Tokens } from "../Tokens";
import { shallow } from "enzyme";

describe("Table helper  test", () => {
  it("should render", () => {
    expect(shallow(<Tokens />)).toMatchSnapshot();
  });
});
