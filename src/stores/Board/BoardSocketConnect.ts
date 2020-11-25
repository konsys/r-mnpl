import { BoardDomain } from "./BoardDomain";
import { MessageHandler } from "components/core/BoardCore/Board/BoardWrapper";
import { SocketActions } from "types/Socket/SocketTypes";
import { createGate } from "effector-react";
import { errorHandler } from "handlers/ErrorHandler";
import socket from "socket.io-client";
import { sample } from "effector";
import { SOCKET_PARAMS } from "params/socketParams";

export const BoardSocketDomain = BoardDomain.domain("PlayersDomain");

export const BoardSocketGate = createGate<void>();

const openSocket = () => {
  socket(SOCKET_PARAMS.BOARD_SOCKET)
    .on(SocketActions.BOARD_MESSAGE, MessageHandler)
    .on(SocketActions.ERROR_MESSAGE, errorHandler);
};

sample({
  clock: BoardSocketGate.open,
  source: BoardSocketGate.state,
  fn: () => openSocket(),
});
