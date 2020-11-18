import * as chat from "stores/Game/Chat/GameChatModel";

import { testUser, testVipUser } from "testMocks/user";

import ChatMessage from "../ChatMessage";
import { Chip } from "@material-ui/core";
import React from "react";
import { Reply } from "@material-ui/icons";
import moment from "moment";
import { setUser } from "stores/Game/User/UserModel";
import { shallow } from "enzyme";
import { theme } from "theme";

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

  it("should show message", () => {
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
        .find("._chat-message")
        .text()
    ).toBe("testMessage");
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

  it("should show render reply sign", () => {
    const date = new Date();
    let vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={[testUser]}
        message={"testMessage"}
        time={date}
      />
    );
    expect(vipMessage.find("._reply-sign")).toHaveLength(1);

    vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={[]}
        message={"testMessage"}
        time={date}
      />
    );
    expect(vipMessage.find("._reply-sign")).toHaveLength(0);
  });

  it("should show render reply message", () => {
    const date = new Date();
    const testUserArray = [testUser, testVipUser];
    let vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={testUserArray}
        message={"testMessage"}
        time={date}
      />
    );
    expect(vipMessage.find("._reply-message")).toHaveLength(
      testUserArray.length
    );

    vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={[]}
        message={"testMessage"}
        time={date}
      />
    );
    expect(vipMessage.find("._reply-message")).toHaveLength(0);
  });

  it("should show render reply variant", () => {
    setUser(testVipUser);
    const date = new Date();
    let vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={[testVipUser]}
        message={"testMessage"}
        time={date}
      />
    );

    let props = vipMessage.find("._reply-message").get(0).props;
    expect(props.variant).toStrictEqual("default");

    setUser(testUser);
    vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={[testVipUser]}
        message={"testMessage"}
        time={date}
      />
    );
    props = vipMessage.find("._reply-message").get(0).props;
    expect(props.variant).toStrictEqual("outlined");
  });

  it("should show render reply color", () => {
    setUser(testVipUser);
    const date = new Date();
    let vipMessage = shallow(
      <ChatMessage
        fromUser={testVipUser}
        replies={[testVipUser]}
        message={"testMessage"}
        time={date}
      />
    );

    let props = vipMessage.find("._reply-message").get(0).props;
    expect(props.color).toStrictEqual("secondary");
    expect(props.style).toHaveProperty("color", "white");
    expect(vipMessage.find("._reply-message").get(0).props.icon).toBeDefined();

    setUser(testUser);
    vipMessage = shallow(
      <ChatMessage
        fromUser={testUser}
        replies={[testUser]}
        message={"testMessage"}
        time={date}
      />
    );
    props = vipMessage.find("._reply-message").get(0).props;
    expect(props.color).toStrictEqual("primary");
    expect(props.style).toHaveProperty("color", "white");
    expect(
      vipMessage.find("._reply-message").get(0).props.icon
    ).toBeUndefined();

    setUser(testVipUser);
    vipMessage = shallow(
      <ChatMessage
        fromUser={testUser}
        replies={[testUser]}
        message={"testMessage"}
        time={date}
      />
    );
    props = vipMessage.find("._reply-message").get(0).props;
    expect(props.color).toStrictEqual("default");
    expect(props.style).toHaveProperty("color", theme.palette.text.primary);
  });
});
