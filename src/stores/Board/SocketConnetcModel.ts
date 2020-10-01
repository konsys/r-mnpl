import { BoardDomain } from "./BoardDomain";
import { MessageHandler } from "components/core/BoardCore/Board/BoardWrapper";
import { SocketActions } from "types/Socket/SocketTypes";
import { createGate } from "effector-react";
import { errorHandler } from "handlers/ErrorHandler";
import openSocket from "socket.io-client";
import { sample } from "effector";

export let boardSocket: SocketIOClient.Socket;

export const BoardSocketDomain = BoardDomain.domain("PlayersDomain");

export const BoardSocketGate = createGate<string>();

const connectBoardSocket = async () => {
  boardSocket = await openSocket("http://localhost:8000/board");
  boardSocket.on(SocketActions.BOARD_MESSAGE, MessageHandler);
  boardSocket.on(SocketActions.ERROR_MESSAGE, errorHandler);
};

export const connectBoardSocketFx = BoardSocketDomain.effect<string, any>({
  handler: connectBoardSocket,
});

BoardSocketGate.state.watch((v) => console.log(111111, v));

sample({
  clock: BoardSocketGate.open,
  source: BoardSocketGate.state,
  target: connectBoardSocketFx,
});
