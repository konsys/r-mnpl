import { BoardDomain } from "./BoardDomain";
import {
  BoardAction,
  IActionId,
  IMoveCompleted,
  IncomeMessageType,
  OutcomeMessageType,
} from "../types/BoardTypes";
import { boardSocket } from "../components/core/BoardCore/BoardCore";
import { actionsStore } from "./ActionStore";

const ModalDomain = BoardDomain.domain("ModalDomain");

export const resetModalEvent = ModalDomain.event();

const init: BoardAction = {
  type: IncomeMessageType.DO_NOTHING,
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
>(OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED, {
  handler: async (data) =>
    boardSocket.emit(OutcomeMessageType.OUTCOME_ROLL_DICES_CLICKED, data),
});

// Emits after token`s move completed
export const tokensMoveCompleteEffect = ModalDomain.effect<
  IMoveCompleted,
  Promise<SocketIOClient.Socket>,
  Error
>(OutcomeMessageType.OUTCOME_PLAYER_TOKEN_TRANSITION_COMPLETED, {
  handler: async (data) =>
    boardSocket.emit(
      OutcomeMessageType.OUTCOME_PLAYER_TOKEN_TRANSITION_COMPLETED,
      data
    ),
});

export const taxPaidEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(OutcomeMessageType.OUTCOME_TAX_PAID_CLICKED, {
  handler: async (data) =>
    boardSocket.emit(OutcomeMessageType.OUTCOME_TAX_PAID_CLICKED, data),
});

export const fieldBoughtEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(OutcomeMessageType.OUTCOME_BUY_FIELD_CLICKED, {
  handler: async (data) =>
    boardSocket.emit(OutcomeMessageType.OUTCOME_BUY_FIELD_CLICKED, data),
});

export const fieldAuctionEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(OutcomeMessageType.OUTCOME_AUCTION_START_CLICKED, {
  handler: async (data) =>
    boardSocket.emit(OutcomeMessageType.OUTCOME_AUCTION_START_CLICKED, data),
});

export const jailDepositPaidEffect = ModalDomain.effect<
  IActionId,
  Promise<SocketIOClient.Socket>,
  Error
>(OutcomeMessageType.OUTCOME_UN_JAIL_PAID_CLICKED, {
  handler: async (data) =>
    boardSocket.emit(OutcomeMessageType.OUTCOME_UN_JAIL_PAID_CLICKED, data),
});

export const modalStore = ModalDomain.store<BoardAction>(init)
  .on(showModalEvent, (_, data) => data)
  .reset(resetModalEvent);

// modalStore.watch((v) => console.log("modalStoreWatch", v));
export const onTransitionEnd = (userId: number) => {
  tokensMoveCompleteEffect({
    userId,
    actionId: actionsStore.getState().actionId,
  });
};
