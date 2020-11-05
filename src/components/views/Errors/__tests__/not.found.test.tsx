import NotFound from "../NotFound";
import React from "react";
import { shallow } from "enzyme";

describe("Tokens test", () => {
  it("should render", () => {
    expect(shallow(<NotFound />)).toMatchSnapshot();
  });
});
