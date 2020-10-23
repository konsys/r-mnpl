import * as act from "stores/Board/ActionStore";

import {
  testFieldActions,
  testOwnedFieldActions,
} from "testMocks/field.actions";
import { testPlayer1, testPlayer2 } from "testMocks/user";

import { FieldActions } from "../FieldActions";
import React from "react";
import { shallow } from "enzyme";
import { updateAllPlayers } from "utils/players.utils";

jest.mock("stores/Board/ActionStore", () => ({
  sendBoardAction: jest.fn(),
}));

describe("Field action test", () => {
  beforeEach(() => updateAllPlayers([testPlayer1, testPlayer2]));
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
  it("should render color", () => {
    expect(
      shallow(<FieldActions {...testFieldActions} isActive={true} />)
        .find(".TableFieldcard > div:first-child()")
        .hasClass(
          `TableFieldcard-top _mnpl_color_${testFieldActions.fieldGroup}`
        )
    ).toBeTruthy();
  });
  it("should render name", () => {
    expect(
      shallow(<FieldActions {...testFieldActions} isActive={true} />)
        .find(".TableFieldcard-top-main")
        .text()
    ).toBe(testFieldActions.name);
  });
  it("should render group name", () => {
    expect(
      shallow(<FieldActions {...testFieldActions} isActive={true} />)
        .find(".TableFieldcard-top-sub")
        .text()
    ).toBe(testFieldActions.fieldGroupName);
  });
  it("should render mortgage", () => {
    expect(
      shallow(
        <FieldActions
          {...testOwnedFieldActions}
          status={{ ...testOwnedFieldActions.status, mortgaged: 1 }}
          isActive={true}
        />
      ).find("._mortgage")
    ).toHaveLength(1);
  });
  it("should render mortgage", () => {
    shallow(
      <FieldActions
        {...testOwnedFieldActions}
        status={{ ...testOwnedFieldActions.status, mortgaged: 1 }}
        isActive={true}
      />
    )
      .find("._mortgage")
      .simulate("click");

    expect(act.sendBoardAction).toHaveBeenCalledTimes(1);
  });
});
