import { BOARD_PARAMS } from "../params/boardParams";
import { BoardDomain } from "./BoardDomain";
import { IContract } from "../types/types";

const ContractDomain = BoardDomain.domain("UserDomain");

export const openContractModal = ContractDomain.event<IOpenContractModal>();
export const closeContractModal = ContractDomain.event();

interface IOpenContractModal {
  fromUserId: number;
  toUserId: number;
}

const initContract: IContract = {
  fromUserId: BOARD_PARAMS.BANK_USER_ID,
  toUserId: BOARD_PARAMS.BANK_USER_ID,
  // fromUserId: 2,
  // toUserId: 3,
  fieldsFrom: [],
  fieldsTo: [],
  moneyFrom: 0,
  moneyTo: 0,
};

export const contractStore = ContractDomain.store<IContract>(initContract)
  .on(openContractModal, (prev, next) => ({
    ...prev,
    fromUserId: next.fromUserId,
    toUserId: next.toUserId,
  }))
  .reset(closeContractModal);

// contractStore.updates.watch((v) => console.log("contractStoreWatch", v));
