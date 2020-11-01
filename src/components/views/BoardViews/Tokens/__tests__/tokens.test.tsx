import React from "react";
import { Tokens } from "../Tokens";
import { shallow } from "enzyme";
import { testField } from "testMocks/field";
import { testToken } from "testMocks/tokens";

describe("Tokens test", () => {
  it("should render", () => {
    expect(
      shallow(<Tokens fields={[testField]} tokens={[testToken]} />)
    ).toMatchSnapshot();
  });
});
