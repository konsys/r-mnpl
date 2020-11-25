import * as socket from "socket.io-client";
import { connectBoardSocketFx } from "../BoardSocketConnect";

jest.mock("socket.io-client", () => ({
  ...jest.requireActual("socket.io-client"),

  connect: jest.fn(),
}));

describe("socket.io-client", () => {
  it("should init socket", async () => {
    // jest.spyOn(socket, "connect");
    expect(1).toBe(1);
    await connectBoardSocketFx();
    expect(socket.connect).toBeCalledTimes(1);
  });
});
