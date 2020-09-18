import {
  getPlayersFx,
  playersGate,
  playersStore,
} from "../../../../stores/Board/PlayersStore";
import { useGate, useStore } from "effector-react";

import { Players } from "../../../views/BoardViews/Players/Players";
import React from "react";

export const PlayersCore = ({ playerIds }: { playerIds: number[] }) => {
  useGate(playersGate, { userIds: playerIds, user: "me" });

  const data = useStore(playersStore);
  const pending = useStore(getPlayersFx.pending);

  console.log("PlayersCore", playerIds);
  return !pending && data.players.length ? (
    <Players players={data.players} />
  ) : (
    <>wait</>
  );
};
