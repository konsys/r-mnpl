import { FieldActionAuto } from "../../FieldActionAuto";
import React from "react";
import { shallow } from "enzyme";
import { testRent } from "testMocks/field.rent";

describe("Field action auto test", () => {
  it("should render properly", () => {
    expect(shallow(<FieldActionAuto {...testRent} />)).toMatchSnapshot();
  });
  it("should show branches price", () => {
    const rendered = shallow(<FieldActionAuto {...testRent} />);
    expect(rendered.find("._base_rent").text()).toBe(
      testRent.baseRent.toString()
    );
    expect(rendered.find("._one_star_rent").text()).toBe(
      testRent.oneStar.toString()
    );
    expect(rendered.find("._two_star_rent").text()).toBe(
      testRent.twoStar.toString()
    );
    expect(rendered.find("._free_star_rent").text()).toBe(
      testRent.freeStar.toString()
    );
  });
});
