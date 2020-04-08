import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import openSocket from "socket.io-client";
import nanoid from "nanoid";
import { setBoardIdEvent, resetBoardEvent } from "../../stores/BoardStore";
import { SocketActions } from "../models/types/ActionsTypes";
import { boardMessageHandler } from "../../actionHandlers/SocketHandlers";

export const mnplSocket = openSocket("http://localhost:3001");

interface Props extends RouteComponentProps {}

export const Game = (props: Props) => {
  useEffect(() => {
    setBoardIdEvent(nanoid(12));
    mnplSocket.on(SocketActions.BOARD_MESSAGE, boardMessageHandler);
    return () => resetBoardEvent();
  }, []);

  return <>GAME</>;
};
