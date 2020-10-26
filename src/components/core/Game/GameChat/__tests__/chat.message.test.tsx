import * as chat from "stores/Game/Chat/GameChatModel";

import ChatMessage from "../ChatMessage";
import React from "react";
import { Reply } from "@material-ui/icons";
import moment from "moment";
import { shallow } from "enzyme";
import { testUser } from "testMocks/user";

jest.mock("stores/Game/Chat/GameChatModel", () => ({
  addReplyToEvent: jest.fn(),
}));

describe("Chat message test", () => {
  it("should render", () => {
    expect(
      shallow(
        <ChatMessage
          fromUser={testUser}
          replies={[testUser]}
          message={"testMessage"}
          time={new Date()}
        />
      )
    ).toMatchSnapshot();
  });

  it("should onclick", () => {
    shallow(
      <ChatMessage
        fromUser={testUser}
        replies={[testUser]}
        message={"testMessage"}
        time={new Date()}
      />
    )
      .find(Reply)
      .get(0)
      .props.onClick.call(null);
    expect(chat.addReplyToEvent).toHaveBeenCalledTimes(1);
  });

  it("should show message time", () => {
    const date = new Date();
    expect(
      shallow(
        <ChatMessage
          fromUser={testUser}
          replies={[testUser]}
          message={"testMessage"}
          time={date}
        />
      )
        .find("._chat-time")
        .text()
    ).toBe(moment(date).format("HH:mm").toString());
  });
});
