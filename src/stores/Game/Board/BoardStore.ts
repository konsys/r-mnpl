import { GameDomain } from "../UserStore";
import { IRoomState } from "../Rooms/RoomsStore";
import { client } from "http/client";
import { createGate } from "effector-react";
import { sample } from "effector";

async function fetchRoom(gameId: string): Promise<any> {
  return await (await client.get(`/room/${gameId}`)).data;
}

export const boardGate = createGate<{ gameId: string }>("boardGate");

export const getRoom = GameDomain.effect<string, IRoomState, Error>({
  handler: fetchRoom,
});

sample({
  clock: boardGate.open,
  source: boardGate.state.map(({ gameId }) => gameId),
  fn: (gameId) => gameId,
  target: getRoom,
});
