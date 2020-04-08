import React, { useEffect } from "react";
import { GameDomain } from "../../stores/BoardStore";
import { client } from "../../http/client";
import { useStore } from "effector-react";
import { IUser, Players } from "../../components/Players/Players";

const URL = `/users`;

async function fetchPlayers(params?: any): Promise<IUser[]> {
  return await (await client.get(URL, params)).data;
}

const PlayersDomain = GameDomain.domain("PlayersDomain");

export const resetPLayersEvent = PlayersDomain.event();
export const getPlayersEffect = PlayersDomain.effect<void, IUser[], Error>({
  handler: fetchPlayers,
});

export const playersStore = PlayersDomain.store<IUser[]>([])
  .on(getPlayersEffect.done, (_, { result }) => result)
  .on(getPlayersEffect.fail, (err) => console.log("error", err))
  .reset(resetPLayersEvent);

export const UsersCore = () => {
  useEffect(() => {
    getPlayersEffect();
    return () => resetPLayersEvent();
  }, []);
  const data = useStore(playersStore);
  return getPlayersEffect.done ? <Players players={data} /> : <>wait</>;
};
