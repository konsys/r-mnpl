import { Input, Switch } from "@material-ui/core";
import {
  addReplyToEvent,
  repliesTo$,
  setChatMessages,
} from "stores/Game/Chat/GameChatModel";
import { testUser, testVipUser } from "testMocks/user";

import ChatMessage from "../ChatMessage";
import GameChat from "../GameChat";
import React from "react";
import { act } from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { shallow } from "enzyme";
import { testChatMessage } from "testMocks/game.chat.message";

describe("Game chat test", () => {
  let shall: typeof shallow;
  const messages = [testChatMessage, testChatMessage];

  beforeEach(async () => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    shall = createShallow();
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

  it("shouldn`t show chat messages", async () => {
    const wrap = shall(<GameChat />);

    act(() => {
      setChatMessages([]);
    });
    wrap.update();
    expect(wrap.find(ChatMessage)).toHaveLength(0);
  });

  it("should show chat messages", () => {
    const wrap = shall(<GameChat />);
    act(() => {
      setChatMessages(messages);
    });
    wrap.update();
    expect(shall(<GameChat />).find(ChatMessage)).toHaveLength(messages.length);
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

  it("should show InputAdornment", async () => {
    expect(shall(<GameChat />).find(Input)).toHaveLength(1);
  });

  it("should show InputAdornment", async () => {
    addReplyToEvent(testUser);
    addReplyToEvent(testVipUser);

    console.log(1111111111, repliesTo$.getState());

    const input = shall(<GameChat />)
      .find(Input)
      .get(0).props;

    // const mockFn = jest.fn();

    // input.on;

    // expect(mockFn.mock.calls).toBe("TestVal");
    expect(input).toStrictEqual(1);
  });
});
