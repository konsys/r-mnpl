import { Contract } from "../Contract";
import React from "react";
import { shallow } from "enzyme";
import { testContract } from "testMocks/contract";
import { testPlayer1 } from "testMocks/user";

describe("Contract test", () => {
  it("renders correctly", () => {
    shallow(<Contract contract={testContract} user={testPlayer1} />);
  });
});
