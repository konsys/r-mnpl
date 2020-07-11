import React, { useEffect } from "react";
import { Board } from "../../views/Board/Board";
import { useStore } from "effector-react";
import { getInitFieldsEffect } from "../../../stores/FieldsStore";
import { SocketActions } from "../../../types/Socket/SocketTypes";
import { MessageHandler } from "../../../handlers/MessageHandler";
import openSocket from "socket.io-client";
import { clearNode } from "effector";
import { BoardDomain } from "../../../stores/BoardDomain";
import { errorHandler } from "../../../handlers/ErrorHandler";
import { BoardLoading } from "../../views/BoardLoading/BoardLoading";

export let boardSocket: SocketIOClient.Socket;

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
