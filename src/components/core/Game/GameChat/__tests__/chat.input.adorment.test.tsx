import * as chat from "stores/Game/Chat/GameChatModel";

import ChatInputAdornment from "../ChatInputAdornment";
import PlayerChip from "../PlayerChip";
import React from "react";
import { addReplyToChatMessage } from "stores/Game/Chat/GameChatModel";
import { shallow } from "enzyme";
import { testUser } from "testMocks/user";

describe("test input adorment", () => {
  it("should render", () => {
    expect(shallow(<ChatInputAdornment />)).toMatchSnapshot();
  });
  it("shouldn't render replies", () => {
    expect(shallow(<ChatInputAdornment />).find(PlayerChip)).toHaveLength(0);
  });

  it("shouldn't render replies", () => {
    addReplyToChatMessage(testUser);
    expect(shallow(<ChatInputAdornment />).find(PlayerChip)).toHaveLength(1);
  });

  it("should render replies", () => {
    addReplyToChatMessage(testUser);
    expect(
      shallow(<ChatInputAdornment />)
        .find(PlayerChip)
        .get(0).props.name
    ).toBe(testUser.name);
  });

  it("should delete chip", () => {
    addReplyToChatMessage(testUser);
    const testMock = chat as any;
    const deleteMock = jest.spyOn(testMock, "deleteReplyToChatMessage");
    shallow(<ChatInputAdornment />)
      .find(PlayerChip)
      .get(0)
      .props.handleDelete();

    expect(deleteMock).toHaveBeenCalledTimes(1);
  });
});
