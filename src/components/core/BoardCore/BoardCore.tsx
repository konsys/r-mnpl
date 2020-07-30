import React, { useEffect } from "react";

import { Board } from "../../views/Board/Board";
import { BoardDomain } from "../../../stores/BoardDomain";
import { BoardLoading } from "../../views/BoardLoading/BoardLoading";
import { BoardMessage } from "../../../types/types";
import { SocketActions } from "../../../types/Socket/SocketTypes";
import { clearNode } from "effector";
import { errorHandler } from "../../../handlers/ErrorHandler";
import { fieldsHandler } from "../../../handlers/FieldsHandler";
import { getInitFieldsEffect } from "../../../stores/FieldsStore";
import nanoid from "nanoid";
import openSocket from "socket.io-client";
import { playersHandler } from "../../../handlers/PlayersHandler";
import { setCurrentActionEvent } from "../../../stores/ActionStore";
import { useStore } from "effector-react";

export let boardSocket: SocketIOClient.Socket;

export const MessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  fieldsHandler(message.data.boardStatus.fields);
  playersHandler(message.data.boardStatus.players);

  setCurrentActionEvent({
    actionId: (event && event._id) || nanoid(4),
    event: message.data.event,
  });
};

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
