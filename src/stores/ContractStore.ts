import { IContract, IField } from "../types/types";

// import { BOARD_PARAMS } from "../params/boardParams";
import { BoardDomain } from "./BoardDomain";
import _ from "lodash";

const ContractDomain = BoardDomain.domain("UserDomain");

export const openContractModal = ContractDomain.event<IOpenContractModal>();
export const closeContractModal = ContractDomain.event();
export const addToContract = ContractDomain.event<IOpenContractModal>();

interface IOpenContractModal {
  fromUserId: number;
  toUserId: number;
  field?: IField;
  money?: number;
}

const initContract: IContract = {
  // fromUserId: BOARD_PARAMS.BANK_USER_ID,
  // toUserId: BOARD_PARAMS.BANK_USER_ID,
  fromUserId: 2,
  toUserId: 3,
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
  .on(addToContract, (prev, data) => {
    if (data.field && data.field.status) {
      if (
        data.field.status.userId === data.fromUserId &&
        !prev.fieldsFrom.includes(data.field)
      ) {
        return {
          ...prev,
          fieldsFrom: _.concat(prev.fieldsFrom, data.field),
          moneyFrom:
            prev.moneyFrom +
            (data.field.price ? data.field.price?.startPrice : 0),
          fromUserId: data.fromUserId,
          toUserId: data.toUserId,
        };
      } else if (
        data.field.status.userId === data.toUserId &&
        !prev.fieldsTo.includes(data.field)
      ) {
        return {
          ...prev,
          fieldsTo: _.concat(prev.fieldsTo, data.field),
          moneyTo:
            prev.moneyTo +
            (data.field.price ? data.field.price?.startPrice : 0),
          fromUserId: data.fromUserId,
          toUserId: data.toUserId,
        };
      }
    }
  })
  .reset(closeContractModal);

// contractStore.updates.watch((v) => console.log("contractStoreWatch", v));
