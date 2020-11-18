import { IOpenContractModal } from "stores/Board/ContractStore";
import { IContract } from "types/types";

export const testContract: IContract = {
  fieldIdsFrom: [1],
  fieldIdsTo: [2],
  fieldFromPrice: 120,
  fieldToPrice: 120,
  moneyFrom: 120,
  moneyTo: 0,
  fromUserId: 1,
  toUserId: 2,
};

export const testOpenContractModal: IOpenContractModal = {
  fromUserId: 1234,
  toUserId: 34535345,
  money: 5352348,
};
