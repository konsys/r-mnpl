import { BoardMessage, FieldStatus, IPlayer } from "../../../types/types";
import React, { useEffect } from "react";
import {
  fieldsStore,
  getInitFieldsEffect,
  setFieldsEvent,
} from "../../../stores/FieldsStore";

import { Board } from "../../views/BoardViews/Board/Board";
import { BoardDomain } from "../../../stores/BoardDomain";
import { BoardLoading } from "../../views/BoardViews/BoardLoading/BoardLoading";
import { SocketActions } from "../../../types/Socket/SocketTypes";
import { clearNode } from "effector";
import { errorHandler } from "../../../handlers/ErrorHandler";
import { isEqual } from "lodash";
import nanoid from "nanoid";
import openSocket from "socket.io-client";
import { setCurrentActionEvent } from "../../../stores/ActionStore";
import { updateAllPlayers } from "../../../utils/players.utils";
import { useStore } from "effector-react";

export let boardSocket: SocketIOClient.Socket;

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

export const BoardCore = () => {
  useEffect(() => {
    boardSocket = openSocket("http://localhost:3001");
    getInitFieldsEffect();
    boardSocket.on(SocketActions.BOARD_MESSAGE, MessageHandler);
    boardSocket.on(SocketActions.ERROR_MESSAGE, errorHandler);
    return () => {
      clearNode(BoardDomain, { deep: true });
    };
  }, []);

  const pending = useStore(getInitFieldsEffect.pending);

  return !pending ? <Board /> : <BoardLoading />;
};
