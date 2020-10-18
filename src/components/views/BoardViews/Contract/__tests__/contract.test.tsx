import * as action from "stores/Board/ActionStore";
import * as modal from "stores/Board/ContractStore";

import { Contract, validateContract } from "../Contract";
import { mount, shallow } from "enzyme";

import React from "react";
import renderer from "react-test-renderer";
import { testContract } from "testMocks/contract";
import { testPlayer1 } from "testMocks/user";

jest.mock("stores/Board/ActionStore", () => ({
  sendBoardAction: jest.fn(),
  gameActionFx: { done: { watch: jest.fn() } },
}));

jest.mock("stores/Board/ContractStore", () => ({
  closeContractModal: jest.fn(),
}));

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
    const res = validateContract(testContract);
    expect(res).toStrictEqual(null);
  });

  it("validates error with no fields", () => {
    const res = validateContract({
      fieldIdsFrom: [],
      fieldIdsTo: [],
      fieldFromPrice: 0,
      fieldToPrice: 0,
      moneyFrom: 100,
      moneyTo: 0,
      fromUserId: 1,
      toUserId: 2,
    });
    expect(res).toMatchObject({
      title: "Ошибка",
      message: "В договоре должно быть хотя бы одно поле.",
    });
  });

  it("validates money fron both sides", () => {
    const res = validateContract({
      fieldIdsFrom: [1],
      fieldIdsTo: [2],
      fieldFromPrice: 100,
      fieldToPrice: 200,
      moneyFrom: 100,
      moneyTo: 100,
      fromUserId: 1,
      toUserId: 2,
    });
    expect(res).toMatchObject({
      title: "Ошибка",
      message: "Наличные в договоре могут быть только с одной стороны.",
    });
  });

  it("validates money sum", () => {
    const res = validateContract({
      fieldIdsFrom: [1],
      fieldIdsTo: [2],
      fieldFromPrice: 100,
      fieldToPrice: 99,
      moneyFrom: 100,
      moneyTo: 0,
      fromUserId: 1,
      toUserId: 2,
    });
    expect(res).toMatchObject({
      title: "Ошибка",
      message:
        "Разница между суммой предлагаемого и запрашиваемого не может превышать 50%.",
    });
  });

  it("validates money sum", () => {
    const res = validateContract({
      fieldIdsFrom: [1],
      fieldIdsTo: [2],
      fieldFromPrice: 100,
      fieldToPrice: 49,
      moneyFrom: 0,
      moneyTo: 0,
      fromUserId: 1,
      toUserId: 2,
    });
    expect(res).toMatchObject({
      title: "Ошибка",
      message:
        "Разница между суммой предлагаемого и запрашиваемого не может превышать 50%.",
    });
  });

  it("validates error modal", () => {
    const comp = mount(<Contract contract={testContract} user={testPlayer1} />);
    comp.find("._accept").simulate("click");

    expect(action.sendBoardAction).toHaveBeenCalledTimes(1);
    expect(action.gameActionFx.done.watch).toHaveBeenCalledTimes(1);
  });

  // TODO test all Contract view functionality
  // it.skip("validates  modal is closed", () => {
  //   const comp = mount(<Contract contract={testContract} user={testPlayer1} />);
  //   comp.find("._accept").simulate("click");

  //   expect(modal.closeContractModal).toHaveBeenCalledTimes(1);
  // });

  beforeEach(() => jest.clearAllMocks());
});
