import { testBoardActionRequest } from "testMocks/board.action.request";
import {
  actions$,
  gameActionFx,
  resetActionEvent,
  sendBoardAction,
  setBoardAction,
  doNothingAction,
} from "../ActionStore";

import * as http from "http/client";
import * as modals from "handlers/Modals";
import * as modalsStore from "../ModalStore";
import * as dices from "handlers/DicesHandler";
import * as contract from "../ContractStore";
import { setRooms } from "stores/Game/Rooms/RoomsModel";
import { testPlayingRoom } from "testMocks/room";
import { IncomeMessageType } from "types/types";
import {
  testDoNothingAction,
  testRollDIcesAction,
  testRollDIcesModal,
  testIncomeBuyModal,
  testIncomeTaxPaying,
  testIncomeUnjailModal,
  testIncomeAuctionModal,
  testIncomeContract,
} from "testMocks/action";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    post: jest.fn().mockImplementation(() => ({ data: { result: true } })),
  },
}));

jest.mock("handlers/Modals", () => ({
  ...jest.requireActual("handlers/Modals"),
  rollDicesModal: jest.fn(),
  canBuyModal: jest.fn(),
  taxModal: jest.fn(),
  unJailModal: jest.fn(),
  unJailPayingModal: jest.fn(),
  auctionModal: jest.fn(),
}));

jest.mock("../ModalStore", () => ({
  ...jest.requireActual("../ModalStore"),
  showBoardActionModal: jest.fn(),
}));

jest.mock("../ContractStore", () => ({
  ...jest.requireActual("../ContractStore"),
  incomeContract: jest.fn(),
}));

jest.mock("handlers/DicesHandler", () => ({
  ...jest.requireActual("handlers/DicesHandler"),
  rollDicesAction: jest.fn(),
}));

describe("Test action store", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should send post on game action", () => {
    gameActionFx(testBoardActionRequest);
    const data = { action: "rollDicesClicked", gameId: "testGameId" };

    expect(http.client.post).toHaveBeenCalledTimes(1);

    expect(http.client.post).toHaveBeenCalledWith("/board/action", {
      data,
    });
  });

  it("should not call gameActionFx on emty room", () => {
    // Don`t worry about 'TypeError: Cannot read property 'filter' of undefined' in console
    // @ts-ignore
    setRooms({});
    sendBoardAction(testBoardActionRequest);

    expect(http.client.post).not.toBeCalled();
  });

  it("should call gameActionFx on sendBoardAction", () => {
    setRooms({ playersInRooms: 1, rooms: [testPlayingRoom] });
    sendBoardAction(testBoardActionRequest);
    const data = { action: "rollDicesClicked", gameId: testPlayingRoom.roomId };
    expect(http.client.post).toHaveBeenCalledTimes(1);
    expect(http.client.post).toHaveBeenCalledWith("/board/action", {
      data,
    });
  });

  it("should set current action to empty object", () => {
    // @ts-ignore
    setBoardAction({});
    expect(actions$.getState()).toStrictEqual({});
  });

  it("should set current action to null", () => {
    // @ts-ignore
    setBoardAction(null);
    expect(actions$.getState()).toStrictEqual(null);
  });

  it("should set current action do nothing", () => {
    setBoardAction(testDoNothingAction);
    const state = actions$.getState();
    expect(state).toStrictEqual(testDoNothingAction);
  });

  it("should reset current action", () => {
    resetActionEvent();
    expect(actions$.getState()).toStrictEqual({
      actionId: "",
      event: {
        action: {
          type: IncomeMessageType.DO_NOTHING,
          userId: 0,
          _id: "",
          isModal: false,
        },
      },
    });
  });

  it("should set do nothing action with user id", () => {
    doNothingAction(2342883424);
    expect(actions$.getState()).toStrictEqual({
      actionId: "startActionId",
      event: {
        action: {
          _id: "actionEventId",
          userId: 2342883424,
          type: IncomeMessageType.DO_NOTHING,
          isModal: false,
        },
      },
    });
  });

  it("should handle income roll dices modal", () => {
    setBoardAction(testRollDIcesModal);
    expect(modals.rollDicesModal).toBeCalledTimes(1);
    expect(modalsStore.showBoardActionModal).toBeCalledTimes(1);
    expect(modals.rollDicesModal).toBeCalledWith(
      testRollDIcesModal.event.action
    );
  });
  it("should handle income roll dices action", () => {
    setBoardAction(testRollDIcesAction);
    expect(dices.rollDicesAction).toBeCalledTimes(1);
    expect(dices.rollDicesAction).toBeCalledWith(
      testRollDIcesAction.event.action
    );
  });

  it("should handle testIncomeBuyModal", () => {
    setBoardAction(testIncomeBuyModal);

    expect(modalsStore.showBoardActionModal).toBeCalledTimes(1);
    expect(modals.canBuyModal).toBeCalledTimes(1);
    expect(modals.canBuyModal).toBeCalledWith(testIncomeBuyModal.event.action);
  });

  it("should handle testIncomeTaxPaying", () => {
    setBoardAction(testIncomeTaxPaying);

    expect(modalsStore.showBoardActionModal).toBeCalledTimes(1);
    expect(modals.taxModal).toBeCalledTimes(1);
    expect(modals.taxModal).toBeCalledWith(testIncomeTaxPaying.event.action);
  });

  it("should handle testIncomeUnjailModal", () => {
    setBoardAction(testIncomeUnjailModal);

    expect(modalsStore.showBoardActionModal).toBeCalledTimes(1);
    expect(modals.unJailModal).toBeCalledTimes(1);
    expect(modals.unJailModal).toBeCalledWith(
      testIncomeUnjailModal.event.action
    );
  });
  it("should handle testIncomeAuctionModal", () => {
    setBoardAction(testIncomeAuctionModal);

    expect(modalsStore.showBoardActionModal).toBeCalledTimes(1);
    expect(modals.auctionModal).toBeCalledTimes(1);
    expect(modals.auctionModal).toBeCalledWith(
      testIncomeAuctionModal.event.action
    );
  });

  it("should handle testIncomeContract", () => {
    setBoardAction(testIncomeContract);

    expect(contract.incomeContract).toBeCalledTimes(1);
    expect(contract.incomeContract).toBeCalledWith();
  });
});
