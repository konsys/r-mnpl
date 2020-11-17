import { testBoardActionRequest } from "testMocks/board.action.request";
import {
  actions$,
  gameActionFx,
  resetActionEvent,
  sendBoardAction,
  setCurrentAction,
  doNothingAction,
} from "../ActionStore";

import * as http from "http/client";
import { setRooms } from "stores/Game/Rooms/RoomsModel";
import { testPlayingRoom } from "testMocks/room";
import { IncomeMessageType } from "types/types";
import { testDoNothingAction } from "testMocks/action";

jest.mock("http/client", () => ({
  ...jest.requireActual("http/client"),
  client: {
    post: jest.fn().mockImplementation(() => ({ data: { result: true } })),
  },
}));

describe("Test action store", () => {
  beforeEach(() => {
    // @ts-ignore
    jest.clearAllMocks();
  });
  it("should send post on game action", async () => {
    await gameActionFx(testBoardActionRequest);
    const data = { action: "rollDicesClicked", gameId: "testGameId" };

    expect(http.client.post).toHaveBeenCalledTimes(1);

    expect(http.client.post).toHaveBeenCalledWith("/board/action", {
      data,
    });
  });

  it("should not call gameActionFx on emty room", async () => {
    // @ts-ignore
    setRooms({});
    sendBoardAction(testBoardActionRequest);

    expect(http.client.post).not.toBeCalled();
  });

  it("should call gameActionFx on sendBoardAction", async () => {
    setRooms({ playersInRooms: 1, rooms: [testPlayingRoom] });
    sendBoardAction(testBoardActionRequest);
    const data = { action: "rollDicesClicked", gameId: "testRoomId" };
    expect(http.client.post).toHaveBeenCalledTimes(1);
    expect(http.client.post).toHaveBeenCalledWith("/board/action", {
      data,
    });
  });

  it("should set current action", async () => {
    // @ts-ignore
    setCurrentAction({});
    expect(actions$.getState()).toStrictEqual({});
  });

  it("should set current action", async () => {
    // @ts-ignore
    setCurrentAction(null);
    expect(actions$.getState()).toStrictEqual(null);
  });

  it("should set current action", async () => {
    // @ts-ignore
    setCurrentAction(testDoNothingAction);
    expect(actions$.getState()).toStrictEqual(testDoNothingAction);
  });

  it("should set current action", async () => {
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

  it("should set do nothing action", async () => {
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
});
