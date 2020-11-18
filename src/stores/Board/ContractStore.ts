import { IContract, IField } from "../../types/types";

import { BOARD_PARAMS } from "../../params/boardParams";
import { BoardDomain } from "./BoardDomain";
import _ from "lodash";
import { actions$ } from "./ActionStore";
import { user$ } from "../Game/User/UserModel";

const ContractDomain = BoardDomain.domain("UserDomain");

export const openContractModal = ContractDomain.event<IOpenContractModal>();
export const closeContractModal = ContractDomain.event();
export const addFieldToContract = ContractDomain.event<IOpenContractModal>();
export const addMoneyToContract = ContractDomain.event<IOpenContractModal>();
export const incomeContract = ContractDomain.event();
export const setContract = ContractDomain.event<IContract>();

export interface IOpenContractModal {
  fromUserId: number;
  toUserId: number;
  field?: IField;
  money?: number;
}

const initContract: IContract = {
  // TODO getPlayer shld return player always
  fromUserId: BOARD_PARAMS.BANK_USER_ID,
  toUserId: BOARD_PARAMS.BANK_USER_ID,
  fieldIdsFrom: [],
  fieldFromPrice: 0,
  fieldIdsTo: [],
  fieldToPrice: 0,
  moneyFrom: 0,
  moneyTo: 0,
};

export const contract$ = ContractDomain.store<IContract>(initContract)
  .on(openContractModal, (state, next) => ({
    ...state,
    fromUserId: next.fromUserId,
    toUserId: next.toUserId,
  }))
  .on(setContract, (_, data) => data)
  .on(incomeContract, (state) => {
    const action = actions$.getState();
    const user = user$.getState();
    if (user && action && action.event.action.contract) {
      if (user.userId === action.event.action.contract.toUserId) {
        return action.event.action.contract;
      }
    }

    return state;
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

// contract$.watch((v) =>
//   console.log("contractStoreWatch", v.fromUserId, v.toUserId)
// );
