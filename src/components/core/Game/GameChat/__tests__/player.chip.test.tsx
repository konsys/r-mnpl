import * as chat from "stores/Game/Chat/GameChatModel";

import { Chip } from "@material-ui/core";
import PlayerChip from "../PlayerChip";
import React from "react";
import { addReplyToChatMessage } from "stores/Game/Chat/GameChatModel";
import { shallow } from "enzyme";
import { testUser } from "testMocks/user";

describe("test input adorment", () => {
  const deleteFn = jest.fn();

  it("should render", () => {
    expect(
      shallow(<PlayerChip name="testName" handleDelete={deleteFn} />)
    ).toMatchSnapshot();
  });
  it("shouldn't render replies", () => {
    expect(
      shallow(<PlayerChip name="testName" handleDelete={deleteFn} />).find(Chip)
    ).toHaveLength(1);
  });

  it("should render replies", () => {
    addReplyToChatMessage(testUser);
    expect(
      shallow(<PlayerChip name="testName" handleDelete={deleteFn} />)
        .find(Chip)
        .get(0).props.label
    ).toBe("testName");
  });

  it("should delete chip", () => {
    shallow(<PlayerChip name="testName" handleDelete={deleteFn} />)
      .find(Chip)
      .get(0)
      .props.onDelete();

    expect(deleteFn).toHaveBeenCalledTimes(1);
  });
});
