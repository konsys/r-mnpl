import { testPlayer1, testPlayer2 } from "testMocks/user";

import { Field } from "../Field";
import React from "react";
import { shallow } from "enzyme";
import { testField } from "testMocks/field";

describe("Dices test", () => {
  it("should render", () => {
    expect(
      shallow(<Field {...testField} onClick={() => null} players={[]} />)
    ).toMatchSnapshot();
  });

  it("should click", () => {
    const click = jest.fn();
    shallow(<Field {...testField} onClick={click} players={[]} />)
      .find(".table-body-board-fields-one")
      .simulate("click");
    expect(click).toBeCalledTimes(1);
  });

  it("should click", () => {
    const click = jest.fn();
    shallow(
      <Field
        {...testField}
        onClick={click}
        players={[testPlayer1, testPlayer2]}
      />
    )
      .find(".table-body-board-fields-one")
      .simulate("click");
    expect(click).toBeCalledTimes(1);
  });
});
