import React from "react";
import { TableHelper } from "../TableHelper";
import { shallow } from "enzyme";

describe("Table helper  test", () => {
  it("should render", () => {
    expect(shallow(<TableHelper />)).toMatchSnapshot();
  });
});
