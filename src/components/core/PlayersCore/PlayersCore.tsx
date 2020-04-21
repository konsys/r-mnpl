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
  return getPlayersEffect.done ? <Players players={data} /> : <>wait</>;
};
