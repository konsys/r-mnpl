import {
  contract$,
  openContractModal,
  setContract,
  initContract,
  incomeContract,
  closeContractModal,
  addFieldToContract,
  addMoneyToContract,
} from "stores/Board/ContractStore";
import { setUser } from "stores/Game/User/UserModel";
import { testIncomeContract } from "testMocks/action";
import { testContract, testOpenContractModal } from "testMocks/contract";
import { testUser } from "testMocks/user";
import { setBoardAction } from "../ActionStore";

const rand = () => Math.floor(Math.random() * 1000000);
const r = rand();
const fieldId = rand();
const startPrice = rand();
const fromUserId = rand();
const toUserId = rand();
const money = rand();
describe("Contract store test", () => {
  beforeEach(() => {
    closeContractModal();
  });

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
    // @ts-ignore
    setContract(r);
    incomeContract();
    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should change contract", () => {
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

  it("should not add field to contract if no field", () => {
    const r = Math.random();
    // @ts-ignore
    setContract(r);
    addFieldToContract(testOpenContractModal);

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should not add field to contract without fromUserId", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should not add field to contract without toUserId", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should not add field to contract without field", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
    });

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should not add field to contract without fieldId", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual(r);
  });
  it("should not add field to contract without startPrice", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: {},
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should not add field to contract without price", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should not add field to contract without status", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
      },
    });

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should add field to contract ", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldFromPrice: startPrice,
      fieldIdsFrom: [fieldId],
    });
  });

  it("should add field to contract", () => {
    // @ts-ignore
    setContract({
      fieldFromPrice: 1100,
      fieldIdsFrom: [],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldFromPrice: 1100 + startPrice,
      fieldIdsFrom: [fieldId],
    });
  });

  it("should add field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldFromPrice: 12,
      fieldIdsFrom: [34],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldFromPrice: 12 + startPrice,
      fieldIdsFrom: [34, fieldId],
    });
  });

  it("should remove field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldFromPrice: startPrice,
      fieldIdsFrom: [fieldId],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldFromPrice: 0,
      fieldIdsFrom: [],
    });
  });

  it("should remove field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldFromPrice: 100 + startPrice,
      fieldIdsFrom: [12, fieldId],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldFromPrice: 100,
      fieldIdsFrom: [12],
    });
  });

  it("should remove field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldFromPrice: 100 - startPrice,
      fieldIdsFrom: [12, fieldId],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: fromUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldFromPrice: 0,
      fieldIdsFrom: [12],
    });
  });
  /**
   *
   *
   */
  it("should add field to contract ", () => {
    // @ts-ignore
    setContract(r);

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: toUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldToPrice: startPrice,
      fieldIdsTo: [fieldId],
    });
  });

  it("should add field to contract", () => {
    // @ts-ignore
    setContract({
      fieldToPrice: 1100,
      fieldIdsTo: [],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: toUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldToPrice: 1100 + startPrice,
      fieldIdsTo: [fieldId],
    });
  });

  it("should add field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldToPrice: 12,
      fieldIdsTo: [34],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: toUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldToPrice: 12 + startPrice,
      fieldIdsTo: [34, fieldId],
    });
  });

  it("should remove field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldToPrice: startPrice,
      fieldIdsTo: [fieldId],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: toUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldToPrice: 0,
      fieldIdsTo: [],
    });
  });

  it("should remove field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldToPrice: 100 + startPrice,
      fieldIdsTo: [12, fieldId],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: toUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldToPrice: 100,
      fieldIdsTo: [12],
    });
  });

  it("should remove field to contract ", () => {
    // @ts-ignore
    setContract({
      fieldToPrice: 100 - startPrice,
      fieldIdsTo: [12, fieldId],
    });

    addFieldToContract({
      fromUserId,
      toUserId,
      money,
      field: {
        fieldId,
        // @ts-ignore
        price: { startPrice },
        // @ts-ignore
        status: { fieldId, mortgaged: 0, userId: toUserId },
      },
    });

    expect(contract$.getState()).toStrictEqual({
      fieldToPrice: 0,
      fieldIdsTo: [12],
    });
  });

  it("should add money to contract ", () => {
    // @ts-ignore
    setContract(r);
    // @ts-ignore
    addMoneyToContract();

    expect(contract$.getState()).toStrictEqual(r);
  });

  it("should add money to contract ", () => {
    // @ts-ignore
    setContract(null);
    // @ts-ignore
    addMoneyToContract();

    expect(contract$.getState()).toStrictEqual(null);
  });

  it("should add money to contract ", () => {
    // @ts-ignore
    setContract(r);
    // @ts-ignore
    addMoneyToContract({
      fromUserId: 0,
      money,
    });

    expect(contract$.getState()).toStrictEqual(r);
  });
});
