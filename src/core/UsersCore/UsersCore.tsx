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

export const resetUsersEvent = UsersDomain.event();
export const getUsersEffect = UsersDomain.effect<void, IUser[], Error>({
  handler: fetchUsers
});

export const usersStore = UsersDomain.store<IUser[]>([])
  .on(getUsersEffect.done, (_, { result }) => result)
  .on(getUsersEffect.fail, err => console.log("error", err))
  .reset(resetUsersEvent);

export const UsersCore = () => {
  useEffect(() => {
    getUsersEffect();
    return () => resetUsersEvent();
  }, []);
  const data = useStore(usersStore);
  return getUsersEffect.done ? <Players users={data} /> : <>wait</>;
};
