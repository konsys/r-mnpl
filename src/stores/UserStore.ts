import { IContract, IUser } from "../types/types";

// import { BOARD_PARAMS } from "../params/boardParams";
import { BoardDomain } from "./BoardDomain";
import { profile } from "../models/Users/api";

const UserDomain = BoardDomain.domain("UserDomain");
export const resetUserEvent = UserDomain.event();

export const getUserEffect = UserDomain.effect<string, IUser, Error>({
  handler: profile,
});

export const setUserEvent = UserDomain.event<IUser>();

export const userStore = UserDomain.store<IUser | null>(null)
  .on(setUserEvent, (_, data) => data)
  .on(getUserEffect.done, (_, data) => data.result)
  .reset(resetUserEvent);

// userStore.updates.watch((v) => console.log("userStore.updates.watch", v));

export const openContractModal = UserDomain.event<IOpenContractModal>();
export const closeContractModal = UserDomain.event();

interface IOpenContractModal {
  fromUserId: number;
  toUserId: number;
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

export const contractStore = UserDomain.store<IContract>(initContract)
  .on(openContractModal, (prev, next) => ({
    ...prev,
    fromUserId: next.fromUserId,
    toUserId: next.toUserId,
  }))
  .reset(closeContractModal);

// contractStore.updates.watch((v) => console.log("contractStoreWatch", v));
