import React, { useEffect } from "react";
import {
  getPlayersFx,
  playersGate,
  playersStore,
  resetPlayersEvent,
} from "../../../../stores/Board/PlayersStore";
import { useGate, useStore } from "effector-react";

import { Players } from "../../../views/BoardViews/Players/Players";
import { gameStore } from "../../../../stores/Board/GameStore";

export const PlayersCore = () => {
  useGate(playersGate);

  const game = gameStore.getState();
  const data = useStore(playersStore);
  const pending = useStore(getPlayersFx.pending);

  useEffect(() => {
    getPlayersFx(game.players);
    return () => resetPlayersEvent();
  }, [game.players]);

  return !pending ? <Players players={data.players} /> : <>wait</>;
};
