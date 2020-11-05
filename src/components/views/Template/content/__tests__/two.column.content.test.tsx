import ContentBlock from "../ContentBlock";
import React from "react";
import TwoColumnContent from "../TwoColumnContent";
import { shallow } from "enzyme";

describe("Friends online test", () => {
  it("should render", () => {
    expect(
      shallow(<TwoColumnContent children={[123456789]} />)
    ).toMatchSnapshot();
  });

  it("should render children", () => {
    expect(
      shallow(<TwoColumnContent children={[123456789]} />)
        .find(ContentBlock)
        .get(0).props.children
    ).toStrictEqual([123456789]);
  });
});
