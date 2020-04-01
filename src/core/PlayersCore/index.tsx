import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import openSocket from "socket.io-client";
import { boardMessageHandler } from "../GameCore/handlers/SocketHandlers";
import nanoid from "nanoid";
import { setBoardIdEvent, resetBoardEvent } from "../models/BoardStore";
import { SocketActions } from "../models/types/ActionsTypes";

export const mnplSocket = openSocket("http://localhost:3001");

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  useEffect(() => {
    setBoardIdEvent(nanoid(12));
    mnplSocket.on(SocketActions.BOARD_MESSAGE, boardMessageHandler);
    return () => resetBoardEvent();
  }, []);

  return <></>;
};
