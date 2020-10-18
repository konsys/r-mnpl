import { BoardModal } from "../BoardModal";
import React from "react";
import { shallow } from "enzyme";

describe("Board modal test", () => {
  it("renders correctly", () => {
    shallow(<BoardModal isModal={true} />);
  });
});
