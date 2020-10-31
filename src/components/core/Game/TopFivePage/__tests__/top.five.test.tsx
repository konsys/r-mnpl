import React from "react";
import TopFivePage from "../TopFivePage";
import { shallow } from "enzyme";

describe("Room top five test", () => {
  it("should render", () => {
    expect(shallow(<TopFivePage />)).toMatchSnapshot();
  });
});
