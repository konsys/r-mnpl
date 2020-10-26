import * as chat from "stores/Game/Chat/GameChatModel";

import { Reply, StarOutlined } from "@material-ui/icons";
import { testUser, testVipUser } from "testMocks/user";

import ChatMessage from "../ChatMessage";
import { Chip } from "@material-ui/core";
import React from "react";
import moment from "moment";
import { shallow } from "enzyme";

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

  it("should show right chip color", () => {
    const date = new Date();
    expect(
      shallow(
        <ChatMessage
          fromUser={testVipUser}
          replies={[testUser]}
          message={"testMessage"}
          time={date}
        />
      )
        .find(Chip)
        .get(0).props.color
    ).toBe("secondary");
    expect(
      shallow(
        <ChatMessage
          fromUser={testUser}
          replies={[testUser]}
          message={"testMessage"}
          time={date}
        />
      )
        .find(Chip)
        .get(0).props.color
    ).toBe("default");
  });

  it("should show icon for vip user", () => {
    const date = new Date();
    const vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={[testUser]}
        message={"testMessage"}
        time={date}
      />
    );
    const message = shallow(
      <ChatMessage
        fromUser={testUser}
        replies={[testUser]}
        message={"testMessage"}
        time={date}
      />
    );
    expect(vipMessage.find(Chip).get(0).props.icon).toBeDefined();
    expect(message.find(Chip).get(0).props.icon).toBeUndefined();
  });
});
