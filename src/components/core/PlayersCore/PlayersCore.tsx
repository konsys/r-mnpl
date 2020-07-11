import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Players } from "../../views/Players/Players";
import {
  getPlayersEffect,
  resetPlayersEvent,
  playersStore,
} from "../../../stores/PlayersStore";
import { gameStore } from "../../../stores/BoardDomain";

export const UsersCore = () => {
  const game = gameStore.getState();
  const data = useStore(playersStore);
  const pending = useStore(getPlayersEffect.pending);
  useEffect(() => {
    getPlayersEffect(game.players);
    return () => resetPlayersEvent();
  }, [game.players]);

  return !pending ? <Players players={data.players} /> : <>wait</>;
};
