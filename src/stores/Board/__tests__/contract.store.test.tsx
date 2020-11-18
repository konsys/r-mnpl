import {
  contract$,
  openContractModal,
  setContract,
} from "stores/Board/ContractStore";
import { testOpenContractModal } from "testMocks/contract";
import { testContract } from "testMocks/contract";

describe("Contract store test", () => {
  it("should open contract modal", () => {
    openContractModal(testOpenContractModal);
    expect(contract$.getState()).toStrictEqual(testOpenContractModal);
  });
  it("should open contract modal", () => {
    setContract(testContract);
    expect(contract$.getState()).toStrictEqual(testContract);
  });
});
