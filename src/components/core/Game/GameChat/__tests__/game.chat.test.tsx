import {
  addReplyToEvent,
  setChatMessages,
} from "stores/Game/Chat/GameChatModel";

import ChatMessage from "../ChatMessage";
import GameChat from "../GameChat";
import React from "react";
import { Switch } from "@material-ui/core";
import { createMount } from "@material-ui/core/test-utils";
import { mount } from "enzyme";
import { testChatMessage } from "testMocks/game.chat.message";
import { testUser } from "testMocks/user";

describe("Game chat test", () => {
  let shall: typeof mount;
  const messages = [testChatMessage, testChatMessage];

  beforeEach(() => {
    jest.clearAllMocks();
    setChatMessages(messages);
  });
  beforeAll(() => {
    shall = createMount();
    addReplyToEvent(testUser);
  });

  afterAll(() => {
    // @ts-ignore
    shall.cleanUp();
  });

  it("should render", () => {
    expect(shall(<GameChat />)).toMatchSnapshot();
  });
  // TODO add online players
  it("should show online players", () => {
    expect(
      shall(<GameChat />)
        .find("._online-players")
        .get(0).props.children
    ).toBe("2900");
  });
  // TODO switch bot messages
  it("should switch bot messages", () => {
    const wrap = shall(<GameChat />);
    expect(wrap.find(Switch).get(0).props.checked).toBeTruthy();
  });

  it("shouldn`t show chat messages", () => {
    setChatMessages([]);
    const wrap = shall(<GameChat />);
    expect(wrap.find(ChatMessage)).toHaveLength(0);
  });

  it("should show chat messages", () => {
    const wrap = shall(<GameChat />);
    expect(wrap.find(ChatMessage)).toHaveLength(messages.length);
  });

  it("should show chat message props", () => {
    const wrap = shall(<GameChat />);
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
});
