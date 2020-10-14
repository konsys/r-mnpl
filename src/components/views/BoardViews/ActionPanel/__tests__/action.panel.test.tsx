import { mount, render, shallow } from "enzyme";

import { ActionPanel } from "../ActionPanel";
import React from "react";

describe("A suite", function () {
  it("should render without throwing an error", function () {
    expect(
      shallow(
        <ActionPanel
          text={"test"}
          disabled={false}
          onClick={() => console.log(2323)}
        />
      ).contains("test")
    );
  });
  it("should render without throwing an error", function () {
    expect(
      shallow(
        <ActionPanel
          text={"test"}
          disabled={true}
          onClick={() => console.log(2323)}
        />
      ).hasClass("_locked")
    ).toEqual(true);
  });

  it("should render without throwing an error", function () {
    expect(
      shallow(
        <ActionPanel
          text={"test"}
          disabled={false}
          onClick={() => console.log(2323)}
        />
      ).hasClass("_locked")
    ).toEqual(false);
  });
});
