import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Players } from "../../views/Players/Players";
import {
  getPlayersEffect,
  resetPlayersEvent,
  playersStore,
} from "../../../stores/PlayersStore";

export const UsersCore = () => {
  useEffect(() => {
    getPlayersEffect();
    return () => resetPlayersEvent();
  }, []);
  const data = useStore(playersStore);
  const pending = useStore(getPlayersEffect.pending);
  return !pending ? <Players players={data.players} /> : <>wait</>;
};
