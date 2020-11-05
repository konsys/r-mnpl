import React from "react";
import TopFive from "../TopFive";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<TopFive />)).toMatchSnapshot();
  });
});
