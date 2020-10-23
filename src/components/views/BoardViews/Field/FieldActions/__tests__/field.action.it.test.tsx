import { FieldActionIT } from "../FieldActionIT";
import React from "react";
import { shallow } from "enzyme";
import { testRent } from "testMocks/field.rent";

describe("Field action IT test", () => {
  it("should render properly", () => {
    expect(shallow(<FieldActionIT {...testRent} />)).toMatchSnapshot();
  });

  it("should show rent", () => {
    const rendered = shallow(<FieldActionIT {...testRent} />);
    expect(rendered.find("._mult_one").text()).toBe(
      testRent.baseRent.toString()
    );
    expect(rendered.find("._mult_two").text()).toBe(
      testRent.oneStar.toString()
    );
  });
});
