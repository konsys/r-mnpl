import React from "react";
import { Ticket } from "../Ticket";
import { shallow } from "enzyme";

describe("Table helper  test", () => {
  it("should render", () => {
    expect(shallow(<Ticket />)).toMatchSnapshot();
  });
});
