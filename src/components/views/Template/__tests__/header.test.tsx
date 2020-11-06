import Header from "../Header";
import React from "react";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
