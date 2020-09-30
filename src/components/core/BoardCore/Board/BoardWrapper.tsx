import "./style.scss";
import "react-toastify/dist/ReactToastify.css";
import "../../../../theme/styles/board/theme.scss";

import { BoardMessage, FieldStatus, IPlayer } from "types/types";
import React, { useEffect } from "react";
import {
  actionsStore,
  setCurrentActionEvent,
} from "../../../../stores/Board/ActionStore";
import {
  fieldsStore,
  getInitFieldsEffect,
  setFieldsEvent,
} from "stores/Board/FieldsStore";
import { players$, playersGate } from "stores/Board/PlayersStore";
import { useGate, useStore } from "effector-react";

import { Arbitr } from "../../../views/BoardViews/Arbitr/Arbitr";
import { BoardDomain } from "stores/Board/BoardDomain";
import { BoardModal } from "../../../views/BoardViews/BoardModal/BoardModal";
import { BoardView } from "components/views/BoardViews/Board/BoardView";
import { Chat } from "../../../views/BoardViews/Chat/Chat";
import { Contract } from "../../../views/BoardViews/Contract/Contract";
import { Dices } from "../../../views/BoardViews/Dices/Dices";
import { IRoomState } from "stores/Game/Rooms/RoomsModel";
import { M1tv } from "../../../views/BoardViews/M1tv/M1tv";
import { PlayersCore } from "../PlayersCore/PlayersCore";
import { SocketActions } from "types/Socket/SocketTypes";
import { TableHelper } from "../../../views/BoardViews/TableHelper/TableHelper";
import { Ticket } from "../../../views/BoardViews/Ticket/ticket";
import { ToastContainer } from "react-toastify";
import { Tokens } from "../../../views/BoardViews/Tokens/Tokens";
import { clearNode } from "effector";
import { errorHandler } from "../../../../handlers/ErrorHandler";
import { isEqual } from "lodash";
import nanoid from "nanoid";
import openSocket from "socket.io-client";
import { updateAllPlayers } from "utils/players.utils";
import { user$ } from "stores/Game/User/UserModel";

export const fieldsHandler = (messageFieldsStatus: FieldStatus[]) => {
  allFieldsIterate(messageFieldsStatus);
};

// Not used
export const statusFieldsIterate = (messageFieldsStatus: FieldStatus[]) => {
  const store = fieldsStore.getState();
  let toUpdateStore = false;

  messageFieldsStatus.forEach((status) => {
    const storeFieldIndex = store.fields.findIndex(
      (storeField) => storeField.fieldId === status.fieldId
    );

    const currentField = store.fields[storeFieldIndex];

    if (currentField && !isEqual(status, currentField.status)) {
      store.fields[storeFieldIndex] = {
        ...store.fields[storeFieldIndex],
        status,
      };
      toUpdateStore = true;
    }
  });

  toUpdateStore && setFieldsEvent({ ...store, version: ++store.version });
};

const allFieldsIterate = (messageFieldsStatus: FieldStatus[]) => {
  const store = fieldsStore.getState();

  store.fields &&
    store.fields.forEach((storeField, index) => {
      const messageFieldStatus = messageFieldsStatus.find(
        (messageField) => messageField.fieldId === storeField.fieldId
      );

      if (messageFieldStatus) {
        store.fields[index] = {
          ...store.fields[index],
          status: messageFieldStatus,
        };
      } else {
        store.fields[index] = {
          ...store.fields[index],
          status: undefined,
        };
      }
    });
  setFieldsEvent({ ...store, version: ++store.version });
};

export const MessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  fieldsHandler(message.data.boardStatus.fields);
  playersHandler(message.data.boardStatus.players);

  setCurrentActionEvent({
    actionId: (event && event._id) || nanoid(4),
    event: message.data.event,
  });
};
export const playersHandler = (players: IPlayer[]) => updateAllPlayers(players);

export let boardSocket: SocketIOClient.Socket;

export const BoardWrapper = ({ board }: { board: IRoomState }) => {
  useGate(playersGate, { userIds: [1, 2], user: "me" });
  useEffect(() => {
    boardSocket = openSocket("http://localhost:8000/board");
    getInitFieldsEffect();
    boardSocket.on(SocketActions.BOARD_MESSAGE, MessageHandler);
    boardSocket.on(SocketActions.ERROR_MESSAGE, errorHandler);
    return () => {
      clearNode(BoardDomain, { deep: true });
    };
  }, []);

  const action = useStore(actionsStore);
  const user = useStore(user$);

  const players = useStore(players$);

  const modal = () => {
    try {
      return (
        user &&
        action &&
        user.userId === action.event.action.userId && (
          <BoardModal
            isModal={
              (action.event.action && action.event.action.isModal) || false
            }
          />
        )
      );
    } catch (err) {}
  };

  return (
    <>
      <div
        className="boardWrapper"
        style={{ width: "100%", height: "100%" }}
        mnpl-newcolors="1"
        cz-shortcut-listen="true"
        mnpl-mouse="1"
        data-os="null"
        data-browser="chrome"
      >
        <div className="table _shakehack">
          <div className="table-body">
            <PlayersCore players={players.players} />
            <div className="table-body-board">
              <BoardView />
              <div className="table-body-board-center">
                <M1tv />
                {modal()}
                <Arbitr />
                <Ticket />
                <Chat />
              </div>
              <div className="table-body-board-tokens">
                <Tokens />
              </div>
              <Dices />
              <Contract />
              <TableHelper />
            </div>
          </div>

          <div id="placeholder_gameover"></div>
        </div>
        <div className="table-jokes"></div>
      </div>

      <ToastContainer />
    </>
  );
};
