import App from "../App";
import React from "react";
import { shallow } from "enzyme";

describe("App test", () => {
  it("should render", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
