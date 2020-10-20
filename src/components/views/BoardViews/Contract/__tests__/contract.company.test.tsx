import { ContractCompany } from "../ContractCompany";
import React from "react";
import { shallow } from "enzyme";
import { testField } from "testMocks/field";

describe("Test contract company", () => {
  it("should render correctly", () => {
    shallow(<ContractCompany field={testField} />);
  });
  it("should snapshot be the same", () => {
    const tree = shallow(<ContractCompany field={testField} />);
    expect(tree).toMatchSnapshot();
  });

  it("should render name", () => {
    const tree = shallow(<ContractCompany field={testField} />);
    expect(tree.find("._title").contains(testField.name)).toBeTruthy();
  });

  it("should render name", () => {
    const tree = shallow(<ContractCompany field={testField} />);
    const price = testField && testField.price && testField.price.startPrice;
    expect(tree.find("._subtitle").contains(`${price}k`)).toBeTruthy();
  });
});
