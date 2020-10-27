import GameChat from "../GameChat";
import React from "react";
import { createMount } from "@material-ui/core/test-utils";
import { mount } from "enzyme";

describe("Game chat test", () => {
  let shall: typeof mount;

  beforeEach(() => jest.clearAllMocks());
  beforeAll(() => {
    shall = createMount();
  });

  afterAll(() => {
    // @ts-ignore
    shall.cleanUp();
  });

  it("should render", () => {
    expect(shall(<GameChat />)).toMatchSnapshot();
  });
});
