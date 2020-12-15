import * as chat from "../GameChatModel";
import * as http from "http/client";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    get: jest.fn().mockImplementation(() => ({
      data: [1, 4234, 635, 132414, 546354, 324245234],
    })),
    post: jest.fn().mockImplementation(() => ({
      data: { result: "he4rr3rtg645rqwe6gerg" },
    })),
  },
}));

const testArray = [
  { userId: 12 },
  { userId: 124 },
  { userId: 654 },
  { userId: 124 },
];

describe("Game model test", () => {
  beforeEach(() => {
    chat.resetChatMessages();
  });

  it("should set chat messages", () => {
    const testArray = [1, 852, 63, 44, 5, 4566, 765, 8];
    expect(chat.gameChat$.getState()).toStrictEqual([]);
    //  @ts-ignore
    chat.setChatMessages(testArray);
    expect(chat.gameChat$.getState()).toStrictEqual(testArray);
  });

  it("should reset chat messages", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(chat.gameChat$.getState()).toStrictEqual([]);
    //  @ts-ignore
    chat.setChatMessages(testArray);
    expect(chat.gameChat$.getState()).toStrictEqual(testArray);

    chat.resetChatMessages();
    expect(chat.gameChat$.getState()).toStrictEqual([]);
  });

  it("should get chat messages", async () => {
    await chat.getChatMessagesFx();
    expect(http.client.get).toHaveBeenCalledTimes(1);
    expect(http.client.get).toHaveBeenCalledWith("/chat");
    expect(chat.gameChat$.getState()).toStrictEqual([
      1,
      4234,
      635,
      132414,
      546354,
      324245234,
    ]);
  });

  it("should post chat messages", async () => {
    await chat.sendChatMessageFx({
      message: "test me if you can",
      replies: [],
    });
    expect(http.client.post).toHaveBeenCalledTimes(1);
    expect(http.client.post).toHaveBeenCalledWith("/chat", {
      message: "test me if you can",
      replies: [],
    });
    expect(chat.gameChat$.getState()).toStrictEqual([]);
  });

  it("should add replies to chat message", async () => {
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 0,
      users: [],
    });
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[0]);
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 1,
      users: [testArray[0]],
    });

    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[1]);
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 2,
      users: [testArray[0], testArray[1]],
    });

    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[2]);
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 3,
      users: [testArray[0], testArray[1], testArray[2]],
    });

    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[3]);
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 3,
      users: [testArray[0], testArray[2], testArray[3]],
    });
  });

  it("should delete reply to chat message", async () => {
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[0]);
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[1]);
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[2]);
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[3]);
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 3,
      users: [testArray[0], testArray[2], testArray[3]],
    });
    //  @ts-ignore
    chat.deleteReplyToChatMessage(testArray[2]);
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 2,
      users: [testArray[0], testArray[3]],
    });
  });
  it("should reset reply to chat message", async () => {
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[0]);
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[1]);
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[2]);
    //  @ts-ignore
    chat.addReplyToChatMessage(testArray[3]);
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 3,
      users: [testArray[0], testArray[2], testArray[3]],
    });

    chat.resetReplyToChatMessage();
    expect(chat.repliesToChatMessage$.getState()).toStrictEqual({
      n: 0,
      users: [],
    });
  });
});
