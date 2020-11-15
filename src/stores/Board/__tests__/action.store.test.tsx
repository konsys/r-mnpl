import { testBoardActionRequest } from "testMocks/board.action.request";
import { gameActionFx } from "../ActionStore";

import * as http from "http/client";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    post: jest.fn().mockImplementation(() => ({ data: { result: true } })),
  },
}));

describe("Test action store", () => {
  afterEach(() => {
    // @ts-ignore
    jest.clearAllMocks();
  });
  it("should ", async () => {
    await gameActionFx(testBoardActionRequest);
    const data = { action: "rollDicesClicked", gameId: "testGameId" };

    expect(http.client.post).toHaveBeenCalled();

    expect(http.client.post).toHaveBeenCalledWith("/board/action", {
      data,
    });
  });
});
