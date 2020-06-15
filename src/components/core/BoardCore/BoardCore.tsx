import React, { useEffect } from "react";
import { Board } from "../../views/Board/Board";
import { useStore } from "effector-react";
import { getInitFieldsEffect, fieldsStore } from "../../../stores/FieldsStore";
import { SocketActions } from "../../../types/ActionsTypes";
import { MessageHandler } from "../../../handlers/MessageHandler";
import openSocket from "socket.io-client";
import { clearNode } from "effector";
import { BoardDomain } from "../../../stores/BoardDomain";
import { errorHandler } from "../../../handlers/ErrorHandler";

export const boardSocket = openSocket("http://localhost:3001");

export const BoardCore = () => {
  useEffect(() => {
    getInitFieldsEffect();
    boardSocket.on(SocketActions.BOARD_MESSAGE, MessageHandler);
    boardSocket.on(SocketActions.ERROR_MESSAGE, errorHandler);
    return () => {
      clearNode(BoardDomain, { deep: true });
    };
  }, []);

  const data = useStore(fieldsStore);

  const pending = useStore(getInitFieldsEffect.pending);
  return !pending ? <Board fields={data.fields} /> : <>wait</>;
};
