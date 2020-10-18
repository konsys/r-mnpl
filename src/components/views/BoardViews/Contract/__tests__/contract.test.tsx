import { Contract, validateContract } from "../Contract";
import { mount, shallow } from "enzyme";
import { testContract, testContractErrorMoney } from "testMocks/contract";

import React from "react";
import renderer from "react-test-renderer";
import { testPlayer1 } from "testMocks/user";

// jest.mock("node-fetch");

describe("Contract test", () => {
  it("renders correctly", () => {
    shallow(<Contract contract={testContract} user={testPlayer1} />);
  });
  it("matches snapshot", () => {
    const tree = renderer
      .create(<Contract contract={testContract} user={testPlayer1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders accept button", () => {
    expect(
      mount(<Contract contract={testContract} user={testPlayer1} />).find(
        "._accept"
      )
    ).toHaveLength(1);
  });
  it("renders cancel button", () => {
    expect(
      mount(<Contract contract={testContract} user={testPlayer1} />).find(
        ".TableContract-top-close"
      )
    ).toHaveLength(1);
  });
  it("validates right contract with null result", () => {
    const res = validateContract({
      fieldIdsFrom: [],
      fieldIdsTo: [],
      fieldFromPrice: 0,
      fieldToPrice: 0,
      moneyFrom: 0,
      moneyTo: 0,
      fromUserId: 1,
      toUserId: 2,
    });
    expect(res).toMatchObject({
      title: "Ошибка",
      message: "В договоре должно быть хотя бы одно поле.",
    });
  });
  it("shows error when money from both sides", () => {
    const res = validateContract({
      fieldIdsFrom: [2],
      fieldIdsTo: [3],
      fieldFromPrice: 200,
      fieldToPrice: 200,
      moneyFrom: 0,
      moneyTo: 1000,
      fromUserId: 1,
      toUserId: 2,
    });
    expect(res).toMatchObject({
      title: "Ошибка",
      message: "В договоре должно быть хотя бы одно поле.",
    });
  });
});
