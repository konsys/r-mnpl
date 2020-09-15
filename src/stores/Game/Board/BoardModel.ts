import { GameDomain } from "../user$";
import { IRoomState } from "../Rooms/RoomsModel";
import { client } from "http/client";
import { createGate } from "effector-react";
import { sample } from "effector";

export interface IBoardParams {
  room: IRoomState;
}

export const BoardDomain = GameDomain.domain("BoardDomain");

async function fetchRoom(gameId: string): Promise<IRoomState> {
  return await (await client.get(`/rooms/${gameId}`)).data;
}

export const getRoomFX = GameDomain.effect<string, IRoomState, Error>({
  handler: fetchRoom,
});

export const board$ = BoardDomain.store<IBoardParams | null>(
  null
).on(getRoomFX.done, (_, { result }) => ({ room: result }));

export const boardGate = createGate<{ gameId: string }>("boardGate");

sample({
  clock: boardGate.open,
  source: boardGate.state.map(({ gameId }) => gameId),
  fn: (gameId) => gameId,
  target: getRoomFX,
});
