import { BoardDomain } from "./BoardDomain";
import { MessageHandler } from "components/core/BoardCore/Board/BoardWrapper";
import { SocketActions } from "types/Socket/SocketTypes";
import { createGate } from "effector-react";
import { errorHandler } from "handlers/ErrorHandler";
import openSocket from "socket.io-client";

export let boardSocket: SocketIOClient.Socket;

export const BoardSocketDomain = BoardDomain.domain("PlayersDomain");

export const BoardSocketGate = createGate();

const connectBoardSocket = async () => {
  boardSocket = await openSocket("http://localhost:8000/board");
  boardSocket.on(SocketActions.BOARD_MESSAGE, MessageHandler);
  boardSocket.on(SocketActions.ERROR_MESSAGE, errorHandler);
};

export const connectBoardSocketFx = BoardSocketDomain.effect<void, any>({
  handler: connectBoardSocket,
});

BoardSocketGate.open.watch(() => connectBoardSocketFx());
// sample({
//     clock: merge([playersGate.open]),
//     source: combine({
//       ids: playersGate.state.map(({ userIds }) => userIds),
//       gameId: boardGame$.map((v) => v?.roomId),
//     }),
//     fn: ({ ids, gameId }) => {
//       getInitFieldsFx();
//       return { ids, gameId: gameId || "" };
//     },
//     target: getInitPlayersFx,
//   });
