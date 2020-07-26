import { IContract, IUser } from "../types/types";

import { BOARD_PARAMS } from "../params/boardParams";
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

export const openContractModal = UserDomain.event();

export const contractStore = UserDomain.store<IContract>({
  fromUserId: BOARD_PARAMS.BANK_USER_ID,
  toUserId: BOARD_PARAMS.BANK_USER_ID,
  isModalOpen: false,
}).on(openContractModal, (prev) => ({ ...prev, isModalOpen: true }));
