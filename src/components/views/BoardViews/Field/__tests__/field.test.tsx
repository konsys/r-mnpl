import { testField, testJailField, testOwnedField } from "testMocks/field";
import { testPlayer1, testPlayer2 } from "testMocks/user";

import { Field } from "../Field";
import React from "react";
import { shallow } from "enzyme";

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

  it("should render jail field", () => {
    expect(
      shallow(
        <Field
          {...testJailField}
          onClick={() => null}
          players={[testPlayer1, testPlayer2]}
        />
      ).find("._jail-visit")
    ).toHaveLength(1);
    expect(
      shallow(
        <Field
          {...testJailField}
          onClick={() => null}
          players={[testPlayer1, testPlayer2]}
        />
      ).find("._jail-cell")
    ).toHaveLength(1);
  });

  it("should render big star", () => {
    expect(
      shallow(
        <Field
          {...testOwnedField}
          status={{ ...testOwnedField.status, branches: 5 }}
          onClick={() => null}
          players={[testPlayer1, testPlayer2]}
        />
      ).find("._big")
    ).toHaveLength(1);
  });
  it("should render 1 star", () => {
    expect(
      shallow(
        <Field
          {...testOwnedField}
          status={{ ...testOwnedField.status, branches: 1 }}
          onClick={() => null}
          players={[testPlayer1, testPlayer2]}
        />
      ).find("._small")
    ).toHaveLength(1);
  });
  it("should render 2 stars", () => {
    expect(
      shallow(
        <Field
          {...testOwnedField}
          status={{ ...testOwnedField.status, branches: 2 }}
          onClick={() => null}
          players={[testPlayer1, testPlayer2]}
        />
      ).find("._small")
    ).toHaveLength(2);
  });
  it("should render 3 stars", () => {
    expect(
      shallow(
        <Field
          {...testOwnedField}
          status={{ ...testOwnedField.status, branches: 3 }}
          onClick={() => null}
          players={[testPlayer1, testPlayer2]}
        />
      ).find("._small")
    ).toHaveLength(3);
  });
  it("should render 4 stars", () => {
    expect(
      shallow(
        <Field
          {...testOwnedField}
          status={{ ...testOwnedField.status, branches: 4 }}
          onClick={() => null}
          players={[testPlayer1, testPlayer2]}
        />
      ).find("._small")
    ).toHaveLength(4);
  });
});
