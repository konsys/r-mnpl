import { BoardDomain } from "./BoardDomain";
import { BoardAction, BoardActionType, IActionId } from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";

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

export const dicesRolledEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async (data) =>
    boardSocket.emit(BoardActionType.ROLL_DICES_MODAL, data),
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

export const modalStore = ModalDomain.store<BoardAction>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(resetModalEvent);

// modalStore.watch((v) => console.log("modalStoreWatch", v));
