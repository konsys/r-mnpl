import { Input, Switch } from "@material-ui/core";
import {
  addReplyToEvent,
  setChatMessages,
} from "stores/Game/Chat/GameChatModel";
import { testUser, testVipUser } from "testMocks/user";

import ChatMessage from "../ChatMessage";
import GameChat from "../GameChat";
import React from "react";
import { act } from "react-test-renderer";
import { shallow } from "enzyme";
import { testChatMessage } from "testMocks/game.chat.message";

describe("Game chat test", () => {
  const messages = [testChatMessage, testChatMessage];

  beforeEach(async () => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    expect(shallow(<GameChat />)).toMatchSnapshot();
  });

  // TODO add online players
  it("should show online players", () => {
    expect(
      shallow(<GameChat />)
        .find("._online-players")
        .get(0).props.children
    ).toBe("2900");
  });
  // TODO switch bot messages
  it("should switch bot messages", () => {
    const wrap = shallow(<GameChat />);
    expect(wrap.find(Switch).get(0).props.checked).toBeTruthy();
  });

  it("shouldn`t show chat messages", async () => {
    const wrap = shallow(<GameChat />);

    act(() => {
      setChatMessages([]);
    });
    wrap.update();
    expect(wrap.find(ChatMessage)).toHaveLength(0);
  });

  it("should show chat messages", () => {
    const wrap = shallow(<GameChat />);
    act(() => {
      setChatMessages(messages);
    });
    wrap.update();
    expect(shallow(<GameChat />).find(ChatMessage)).toHaveLength(
      messages.length
    );
  });

  it("should show chat message props", () => {
    const wrap = shallow(<GameChat />);
    expect(wrap.find(ChatMessage).get(0).props.fromUser).toBe(
      messages[0].fromUser
    );
    expect(wrap.find(ChatMessage).get(0).props.message).toBe(
      messages[0].message
    );
    expect(wrap.find(ChatMessage).get(0).props.time).toBe(messages[0].time);
    expect(wrap.find(ChatMessage).get(0).props.replies).toStrictEqual(
      messages[0].replies
    );
  });

  it("should show InputAdornment", async () => {
    expect(shallow(<GameChat />).find(Input)).toHaveLength(1);
  });

  it("should change input value", async () => {
    addReplyToEvent(testUser);
    addReplyToEvent(testVipUser);
    const input = shallow(<GameChat />);
    input.find(Input).simulate("change", { target: { value: "testValue" } });
    expect(input.find(Input).get(0).props.value).toStrictEqual("testValue");
  });

  it("should change input value", async () => {
    addReplyToEvent(testUser);
    addReplyToEvent(testVipUser);
    const input = shallow(<GameChat />);
    input
      .find(Input)
      .simulate("keypress", { key: "Enter", target: { value: "testValue" } });
    // expect(chat.sendChatMessageFx).toHaveBeenCalledTimes(1);
  });
});

// https://stackoverflow.com/questions/59312671/mock-only-one-function-from-module-but-leave-rest-with-original-functionality
