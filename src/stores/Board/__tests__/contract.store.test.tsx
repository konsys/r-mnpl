import {
  contract$,
  openContractModal,
  setContract,
  initContract,
  incomeContract,
  closeContractModal,
} from "stores/Board/ContractStore";
import { setUser } from "stores/Game/User/UserModel";
import { testIncomeContract } from "testMocks/action";
import { testContract } from "testMocks/contract";
import { testUser } from "testMocks/user";
import { setBoardAction } from "../ActionStore";

describe("Contract store test", () => {
  beforeEach(() => closeContractModal());

  it("should set init contract", () => {
    expect(contract$.getState()).toStrictEqual(initContract);
  });

  it("should open contract modal", () => {
    openContractModal({ fromUserId: 213423524, toUserId: 234234234 });
    expect(contract$.getState()).toStrictEqual({
      ...initContract,
      fromUserId: 213423524,
      toUserId: 234234234,
    });
  });

  it("should set contract", () => {
    setContract(testContract);
    expect(contract$.getState()).toStrictEqual(testContract);
  });

  it("should not change contract", () => {
    const r = Math.random();
    // @ts-ignore
    setContract(r);
    incomeContract();
    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should change contract", () => {
    const r = Math.random();
    // @ts-ignore
    setContract(r);
    setUser({
      ...testUser,
      userId: testIncomeContract.event.action.contract?.toUserId || 0,
    });

    setBoardAction(testIncomeContract);
    incomeContract();
    expect(contract$.getState()).toStrictEqual(testContract);
  });
});
