import { IContract, IFetchGameAction, IField } from "../types/types";

import { BOARD_PARAMS } from "../params/boardParams";
import { BoardDomain } from "./BoardDomain";
import _ from "lodash";
import { fetchGameAction } from "../models/Board/api";

const ContractDomain = BoardDomain.domain("UserDomain");

export const openContractModal = ContractDomain.event<IOpenContractModal>();
export const closeContractModal = ContractDomain.event();
export const addFieldToContract = ContractDomain.event<IOpenContractModal>();
export const addMoneyToContract = ContractDomain.event<IOpenContractModal>();
export const sendContract = ContractDomain.effect<
  IFetchGameAction,
  Promise<any>
>({
  handler: fetchGameAction,
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
  fieldFromPrice: 0,
  fieldIdsTo: [],
  fieldToPrice: 0,
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
    const fieldId = (data.field && data.field.fieldId) || 0;
    const price =
      data.field && data.field.price && data.field.status
        ? data.field.status.mortgaged
          ? data.field.price.startPrice / 2
          : data.field.price.startPrice
        : 0;
    const ownerId =
      (data.field &&
        data.field.price &&
        data.field.status &&
        data.field.status.userId) ||
      0;

    if (fieldId && ownerId && price) {
      if (ownerId === data.fromUserId && !prev.fieldIdsFrom.includes(fieldId)) {
        return {
          ...prev,
          fieldIdsFrom: _.concat(prev.fieldIdsFrom, fieldId),
          fieldFromPrice: prev.fieldFromPrice + price,
        };
      } else if (
        ownerId === data.fromUserId &&
        prev.fieldIdsFrom.includes(fieldId)
      ) {
        prev.fieldIdsFrom.splice(_.indexOf(prev.fieldIdsFrom, fieldId), 1);
        return {
          ...prev,
          fieldIdsFrom: prev.fieldIdsFrom,
          fieldFromPrice: prev.fieldFromPrice - price,
        };
      } else if (
        ownerId === data.toUserId &&
        !prev.fieldIdsTo.includes(fieldId)
      ) {
        return {
          ...prev,
          fieldIdsTo: _.concat(prev.fieldIdsTo, fieldId),
          fieldToPrice: prev.fieldToPrice + price,
        };
      } else if (
        ownerId === data.toUserId &&
        prev.fieldIdsTo.includes(fieldId)
      ) {
        prev.fieldIdsTo.splice(_.indexOf(prev.fieldIdsTo, fieldId), 1);
        return {
          ...prev,
          fieldIdsTo: prev.fieldIdsTo,
          fieldToPrice: prev.fieldToPrice - price,
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

// contractStore.watch((v) => console.log("contractStoreWatch", v));
