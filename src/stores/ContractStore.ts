import { IContract, IField } from "../types/types";

import { BOARD_PARAMS } from "../params/boardParams";
import { BoardDomain } from "./BoardDomain";
import _ from "lodash";
import { fetchContract } from "../models/Contract/api";

const ContractDomain = BoardDomain.domain("UserDomain");

export const openContractModal = ContractDomain.event<IOpenContractModal>();
export const closeContractModal = ContractDomain.event();
export const addFieldToContract = ContractDomain.event<IOpenContractModal>();
export const addMoneyToContract = ContractDomain.event<IOpenContractModal>();
export const sendContract = ContractDomain.effect<IContract, Promise<any>>({
  handler: fetchContract,
});

interface IOpenContractModal {
  fromUserId: number;
  toUserId: number;
  field?: IField;
  money?: number;
}

const initContract: IContract = {
  // TODO getPlayer shld return player always
  fromUserId: BOARD_PARAMS.BANK_USER_ID,
  toUserId: BOARD_PARAMS.BANK_USER_ID,
  // fromUserId: 2,
  // toUserId: 3,
  fieldIdsFrom: [],
  fieldIdsTo: [],
  moneyFrom: 0,
  moneyTo: 0,
};

export const contractStore = ContractDomain.store<IContract>(initContract)
  .on(openContractModal, (state, next) => {
    return {
      ...state,
      fromUserId: next.fromUserId,
      toUserId: next.toUserId,
    };
  })
  .on(addFieldToContract, (prev, data) => {
    if (data.field && data.field.status) {
      const price = data.field.price
        ? data.field.status.mortgaged
          ? data.field.price.startPrice / 2
          : data.field.price.startPrice
        : 0;
      if (
        data.field.status.userId === data.fromUserId &&
        !prev.fieldIdsFrom.includes(data.field.fieldId || 0)
      ) {
        return {
          ...prev,
          fieldsFrom: _.concat(prev.fieldIdsFrom, data.field.fieldId || 0),
          moneyFrom: prev.moneyFrom + price,
        };
      } else if (
        data.field.status.userId === data.fromUserId &&
        prev.fieldIdsFrom.includes(data.field.fieldId || 0)
      ) {
        prev.fieldIdsFrom.splice(
          _.indexOf(prev.fieldIdsFrom, data.field.fieldId || 0),
          1
        );
        return {
          ...prev,
          fieldsFrom: prev.fieldIdsFrom,
          moneyFrom: prev.moneyFrom - price,
        };
      } else if (
        data.field.status.userId === data.toUserId &&
        !prev.fieldIdsTo.includes(data.field.fieldId || 0)
      ) {
        return {
          ...prev,
          fieldIdsTo: _.concat(prev.fieldIdsTo, data.field.fieldId || 0),
          moneyTo: prev.moneyTo + price,
        };
      } else if (
        data.field.status.userId === data.toUserId &&
        prev.fieldIdsTo.includes(data.field.fieldId || 0)
      ) {
        prev.fieldIdsTo.splice(
          _.indexOf(prev.fieldIdsTo, data.field.fieldId || 0),
          1
        );
        return {
          ...prev,
          fieldIdsTo: prev.fieldIdsTo,
          moneyTo: prev.moneyTo - price,
        };
      }
    }
  })
  .on(addMoneyToContract, (prev, data) => {
    if (data.fromUserId === prev.fromUserId) {
      prev.moneyFrom = data.money || 0;
    } else {
      prev.moneyTo = data.money || 0;
    }
    return prev;
  })
  .reset(closeContractModal);

contractStore.watch((v) => console.log("contractStoreWatch", v));
