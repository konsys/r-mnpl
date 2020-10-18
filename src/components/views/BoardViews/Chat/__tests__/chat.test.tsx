import { Chat } from "../Chat";
import React from "react";
import { shallow } from "enzyme";

describe("Board chat test", () => {
  it("renders correctly", async () => {
    shallow(<Chat />);
  });
});
