import { IContract, IField } from "../../types/types";

import { BOARD_PARAMS } from "../../params/boardParams";
import { BoardDomain } from "./BoardDomain";
import { concat, get, indexOf } from "lodash";

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

export const initContract: IContract = {
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
  .on(addFieldToContract, (prev, data) => {
    const fieldId = get(data, "field.fieldId") || 0;
    const fieldPrice = get(data, "field.price.startPrice") || 0;
    const mortaged = get(data, "field.status.mortgaged") || false;
    const ownerId = get(data, "field.status.userId") || 0;
    const price = mortaged ? fieldPrice / 2 : fieldPrice;
    const fromUserId = get(data, "fromUserId") || 0;
    const toUserId = get(data, "toUserId") || 0;
    const priceFrom = get(prev, "fieldFromPrice") || 0;
    const priceTo = get(prev, "fieldToPrice") || 0;
    const fieldsFrom = Array.isArray(get(prev, "fieldIdsFrom"))
      ? prev.fieldIdsFrom
      : [];
    const fieldsTo = Array.isArray(get(prev, "fieldIdsTo"))
      ? prev.fieldIdsTo
      : [];

    if (fieldId && ownerId && price && fromUserId && toUserId) {
      const prevFromIncludes = fieldsFrom.includes(fieldId);
      const prevToIncludes = fieldsTo.includes(fieldId);
      // Add field to given fields
      if (ownerId === fromUserId && !prevFromIncludes) {
        return {
          ...prev,
          fieldIdsFrom: concat(fieldsFrom, fieldId),
          fieldFromPrice: priceFrom + price,
        };
        // Remove field from given fields
      } else if (ownerId === fromUserId && prevFromIncludes) {
        fieldsFrom.splice(indexOf(fieldsFrom, fieldId), 1);
        return {
          ...prev,
          fieldIdsFrom: fieldsFrom,
          fieldFromPrice: priceFrom - price > 0 ? priceFrom - price : 0,
        };
        // Add field to taken fields
      } else if (ownerId === toUserId && !prevToIncludes) {
        return {
          ...prev,
          fieldIdsTo: concat(fieldsTo, fieldId),
          fieldToPrice: priceTo + price,
        };
        // Remove field from taken fields
      } else if (ownerId === toUserId && prevToIncludes) {
        fieldsTo.splice(indexOf(fieldsTo, fieldId), 1);
        return {
          ...prev,
          fieldIdsTo: fieldsTo,
          fieldToPrice: priceTo - price > 0 ? priceTo - price : 0,
        };
      }
    }
    return prev;
  })
  .on(addMoneyToContract, (prev, data) => {
    const fromUserId = get(data, "fromUserId") || 0;
    const prevFromUserId = get(prev, "fromUserId") || 0;
    const toUserId = get(data, "toUserId") || 0;
    const prevToUserId = get(prev, "toUserId") || 0;
    let money = get(data, "money") || 0;
    money = money > 0 ? money : 0;

    if (fromUserId > 0 && prevFromUserId > 0 && fromUserId === prevFromUserId) {
      prev.moneyFrom = money;
    } else if (toUserId > 0 && prevToUserId > 0 && toUserId === prevToUserId) {
      prev.moneyTo = money;
    }
    return prev;
  })
  .reset(closeContractModal);

// contract$.watch((v) =>
//   console.log("contractStoreWatch", v.fromUserId, v.toUserId)
// );
