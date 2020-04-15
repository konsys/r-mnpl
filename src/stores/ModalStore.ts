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

export const dicesModalEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.ROLL_DICES, {
  handler: async (data) =>
    boardSocket.emit(BoardActionType.ROLL_DICES_MODAL, data),
});

export const canBuyModalEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(BoardActionType.CAN_BUY, {
  handler: async (data) => boardSocket.emit(BoardActionType.CAN_BUY, data),
});

export const modalStore = ModalDomain.store<BoardAction>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(resetModalEvent);

// modalStore.watch((v) => console.log("modalStoreWatch", v));
