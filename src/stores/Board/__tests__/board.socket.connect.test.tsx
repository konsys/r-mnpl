import * as openSocket from "socket.io-client";
import { connectBoardSocketFx } from "../BoardSocketConnect";

jest.mock("socket.io-client", () => ({
  //   ...jest.requireActual("socket.io-client"),

  default: jest.fn(),
}));

describe("socket.io-client", () => {
  it("should init socket", async () => {
    // jest.spyOn(openSocket, "default");

    await connectBoardSocketFx();
    // expect(openSocket["default"]).toBeCalledTimes(1);
  });
});
