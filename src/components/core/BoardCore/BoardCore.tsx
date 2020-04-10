import React, { useEffect } from "react";
import { Board } from "../../views/Board/Board";
import { useStore } from "effector-react";
import {
  getInitFieldsEffect,
  resetFieldsEvent,
  fieldsStore,
} from "../../../stores/FieldsStore";
import { SocketActions } from "../../../types/ActionsTypes";
import { boardMessageHandler } from "../../../handlers/SocketHandlers";
import { resetActionEvent } from "../../../stores/ActionStore";
import openSocket from "socket.io-client";

export const boardSocket = openSocket("http://localhost:3001");

export const BoardCore = () => {
  useEffect(() => {
    getInitFieldsEffect();
    boardSocket.on(SocketActions.BOARD_MESSAGE, boardMessageHandler);
    return () => {
      resetActionEvent();
      resetFieldsEvent();
    };
  }, []);

  const data = useStore(fieldsStore);
  return getInitFieldsEffect.done ? <Board fields={data} /> : <>wait</>;
};
