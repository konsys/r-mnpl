import React from "react";
import { Ticket } from "../Ticket";
import { shallow } from "enzyme";

describe("Table helper  test", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render", () => {
    expect(shallow(<Ticket />)).toMatchSnapshot();
  });
});
