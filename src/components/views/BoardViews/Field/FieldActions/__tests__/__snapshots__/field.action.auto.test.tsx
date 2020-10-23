import { FieldActionAuto } from "../../FieldActionAuto";
import React from "react";
import { shallow } from "enzyme";
import { testRent } from "testMocks/field.rent";

describe("Field action auto test", () => {
  it("should render properly", () => {
    expect(shallow(<FieldActionAuto {...testRent} />)).toMatchSnapshot();
  });
});
