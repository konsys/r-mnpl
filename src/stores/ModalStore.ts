import { BoardDomain } from "./BoardDomain";
import {
  BoardAction,
  BoardActionType,
  IActionId,
  IMoveCompleted,
} from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";
import { actionsStore, setCurrentActionEvent } from "./ActionStore";

const ModalDomain = BoardDomain.domain("ModalDomain");

export const resetModalEvent = ModalDomain.event();

const init: BoardAction = {
  type: BoardActionType.ROLL_DICES_MODAL,
  userId: 0,
  title: "",
  text: "",
  actionButtons: [],
  _id: "",
};

export const showModalEvent = ModalDomain.event<BoardAction>();

// Emits to roll dices and move tokens
export const rollDicesEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES_MODAL, {
  handler: async (data) =>
    boardSocket.emit(BoardActionType.ROLL_DICES_MODAL, data),
});

// Emits after token`s move completed
export const tokensMoveCompleteEffect = ModalDomain.effect<
  IMoveCompleted,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.PLAYER_TOKEN_MOVED, {
  handler: async (data) =>
    boardSocket.emit(BoardActionType.PLAYER_TOKEN_MOVED, data),
});

export const taxPaidEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.TAX_PAID, {
  handler: async (data) => boardSocket.emit(BoardActionType.TAX_PAID, data),
});

export const fieldBoughtEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.CAN_BUY, {
  handler: async (data) => boardSocket.emit(BoardActionType.CAN_BUY, data),
});

export const fieldAuctionEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.AUCTION_START, {
  handler: async (data) =>
    boardSocket.emit(BoardActionType.AUCTION_START, data),
});

export const jailDepositPaidEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.UN_JAIL_PAID, {
  handler: async (data) => boardSocket.emit(BoardActionType.UN_JAIL_PAID, data),
});

export const modalStore = ModalDomain.store<BoardAction>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(resetModalEvent);

// modalStore.watch((v) => console.log("modalStoreWatch", v));
export const onTransitionEnd = (userId: number) => {
  const action = actionsStore.getState();
  console.log(11111, action);

  !action.isCompleted &&
    tokensMoveCompleteEffect({
      userId,
      actionId: actionsStore.getState().actionId,
    }) &&
    setCurrentActionEvent({ ...action, isCompleted: true });
};
