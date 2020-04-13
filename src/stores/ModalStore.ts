import { BoardDomain } from "./BoardDomain";
import { BoardAction, BoardActionType, IActionId } from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";

const ModalDomain = BoardDomain.domain("ModalDomain");

export const resetModalEvent = ModalDomain.event();

const init: BoardAction = {
  type: BoardActionType.SHOW_DICES_MODAL,
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
    boardSocket.emit(BoardActionType.SHOW_DICES_MODAL, data),
});

export const modalStore = ModalDomain.store<BoardAction>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(resetModalEvent);
