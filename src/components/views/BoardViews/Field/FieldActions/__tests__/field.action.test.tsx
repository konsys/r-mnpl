import { FieldActions } from "../FieldActions";
import React from "react";
import { shallow } from "enzyme";
import { testFieldActions } from "testMocks/field.actions";

describe("Field action test", () => {
  it("should render", () => {
    expect(shallow(<FieldActions {...testFieldActions} />)).toMatchSnapshot();
  });
});
