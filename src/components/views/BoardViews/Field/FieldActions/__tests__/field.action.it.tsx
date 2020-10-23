import { FieldActionIT } from "../FieldActionIT";
import React from "react";
import { shallow } from "enzyme";
import { testRent } from "testMocks/field.rent";

describe("Field action IT test", () => {
  it("should render properly", () => {
    expect(shallow(<FieldActionIT {...testRent} />)).toMatchSnapshot();
  });
});
