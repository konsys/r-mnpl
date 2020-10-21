import { Field } from "../Field";
import React from "react";
import { shallow } from "enzyme";
import { testField } from "testMocks/field";

describe("Dices test", () => {
  it("should render", () => {
    expect(
      shallow(<Field {...testField} onClick={() => null} players={[]} />)
    ).toMatchSnapshot();
  });
});
