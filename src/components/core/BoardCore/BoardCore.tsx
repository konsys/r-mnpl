import React, { useEffect } from "react";
import { Board } from "../../views/Board/Board";
import { useStore } from "effector-react";
import { getInitFieldsEffect, fieldsStore } from "../../../stores/FieldsStore";
import { SocketActions } from "../../../types/ActionsTypes";
import { boardMessageHandler } from "../../../handlers/MainHandler";
import openSocket from "socket.io-client";
import { clearNode } from "effector";
import { BoardDomain } from "../../../stores/BoardDomain";

export const boardSocket = openSocket("http://localhost:3001");

export const BoardCore = () => {
  useEffect(() => {
    getInitFieldsEffect();
    boardSocket.on(SocketActions.BOARD_MESSAGE, boardMessageHandler);
    return () => {
      clearNode(BoardDomain, { deep: true });
    };
  }, []);

  const data = useStore(fieldsStore);
  return getInitFieldsEffect.done ? <Board fields={data.fields} /> : <>wait</>;
};
