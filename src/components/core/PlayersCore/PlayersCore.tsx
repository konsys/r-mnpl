import React, { useEffect } from "react";
import {
  getPlayersEffect,
  playersStore,
  resetPlayersEvent,
} from "../../../stores/PlayersStore";

import { Players } from "../../views/Players/Players";
import { gameStore } from "../../../stores/GameStore";
import { getUserEffect } from "../../../stores/UserStore";
import { useStore } from "effector-react";

export const PlayersCore = () => {
  const game = gameStore.getState();
  const data = useStore(playersStore);
  const pending = useStore(getPlayersEffect.pending);

  useEffect(() => {
    getPlayersEffect(game.players);
    getUserEffect("me");
    return () => resetPlayersEvent();
  }, [game.players]);

  return !pending ? <Players players={data.players} /> : <>wait</>;
};
