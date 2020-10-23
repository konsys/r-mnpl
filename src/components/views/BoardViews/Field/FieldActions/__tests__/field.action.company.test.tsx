import { FieldActionCompany } from "../FieldActionCompany";
import React from "react";
import { shallow } from "enzyme";
import { testRent } from "testMocks/field.rent";

describe("Field action auto test", () => {
  it("should render properly", () => {
    expect(shallow(<FieldActionCompany {...testRent} />)).toMatchSnapshot();
  });
  it("should show branches price", () => {
    const rendered = shallow(<FieldActionCompany {...testRent} />);
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
    expect(rendered.find("._four_star_rent").text()).toBe(
      testRent.fourStar.toString()
    );
    expect(rendered.find("._big_star_rent").text()).toBe(
      testRent.bigStar.toString()
    );
    expect(rendered.find("._star_small")).toHaveLength(10);
    expect(rendered.find("._star_big")).toHaveLength(1);
  });
});
