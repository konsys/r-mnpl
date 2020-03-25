import React, { useEffect } from "react";
import { GameDomain } from "../GameCore/models/GameStore";
import { client } from "../../http/client";
import { useStore } from "effector-react";
import { IUser, Players } from "../../components/Players/Players";

const URL = `/users`;

async function fetchUsers(params?: any): Promise<IUser[]> {
  return await (await client.get(URL, params)).data;
}

const UsersDomain = GameDomain.domain("UsersDomain");

export const resetUsers = UsersDomain.event();
export const getUsersFX = UsersDomain.effect<void, IUser[], Error>({
  handler: fetchUsers
});

export const usersStore = UsersDomain.store<IUser[]>([])
  .on(getUsersFX.done, (_, { result }) => result)
  .on(getUsersFX.fail, err => console.log("error", err))
  .reset(resetUsers);

export const UsersCore = () => {
  useEffect(() => {
    getUsersFX();
    return () => resetUsers();
  }, []);
  const data = useStore(usersStore);
  return getUsersFX.done ? <Players users={data} /> : <>wait</>;
};

usersStore.watch(v => console.log(33333, v));
