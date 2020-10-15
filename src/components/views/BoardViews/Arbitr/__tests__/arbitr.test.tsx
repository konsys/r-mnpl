import { mount, shallow } from "enzyme";

import { Arbitr } from "../Arbitr";
import React from "react";
import renderer from "react-test-renderer";

describe("A suite", function () {
  it("renders correctly", () => {
    const tree = renderer.create(<Arbitr />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders three inputs", () => {
    const wrapper = shallow(<Arbitr />);
    expect(wrapper.find("input")).toHaveLength(3);
  });
});
