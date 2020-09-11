import React, { useEffect } from "react";
import {
  getPlayersFx,
  playersStore,
  resetPlayersEvent,
} from "../../../../stores/Board/PlayersStore";

import { Players } from "../../../views/BoardViews/Players/Players";
import { gameStore } from "../../../../stores/Board/GameStore";
import { getUserFx } from "../../../../stores/Game/UserStore";
import { useStore } from "effector-react";

export const PlayersCore = () => {
  const game = gameStore.getState();
  const data = useStore(playersStore);
  const pending = useStore(getPlayersFx.pending);

  useEffect(() => {
    getPlayersFx(game.players);
    getUserFx("me");
    return () => resetPlayersEvent();
  }, [game.players]);

  return !pending ? <Players players={data.players} /> : <>wait</>;
};
