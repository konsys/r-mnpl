import { FieldActions } from "../FieldActions";
import React from "react";
import { shallow } from "enzyme";
import { testFieldActions } from "testMocks/field.actions";

describe("Field action test", () => {
  it("should render", () => {
    expect(shallow(<FieldActions {...testFieldActions} />)).toMatchSnapshot();
  });

  it("should render position", () => {
    expect(
      shallow(<FieldActions {...testFieldActions} />)
        .find(".TableFieldcard")
        .get(0).props.style
    ).toHaveProperty("top", `${testFieldActions.position.top}px`);
    expect(
      shallow(<FieldActions {...testFieldActions} />)
        .find(".TableFieldcard")
        .get(0).props.style
    ).toHaveProperty("left", `${testFieldActions.position.left}px`);
  });
  it("should render active", () => {
    expect(
      shallow(<FieldActions {...testFieldActions} isActive={false} />)
        .find(".TableFieldcard")
        .get(0).props.style
    ).toHaveProperty("display", "none");
    expect(
      shallow(<FieldActions {...testFieldActions} isActive={true} />)
        .find(".TableFieldcard")
        .get(0).props.style
    ).toHaveProperty("display", "block");
  });
});
