import React, { useEffect } from "react";
import { GameDomain } from "../GameCore/GameModel";
import { client } from "../../http/client";
import { useStore } from "effector-react";
import { IUser, Players } from "../../components/Players/Players";
import { Board } from "../../components/Board/Board";
import { BoardField } from "../../components/Field/Field";

const URL = `/users`;

async function fetchUsers(params?: any): Promise<BoardField[]> {
  return await (await client.get(URL, params)).data;
}

const UsersDomain = GameDomain.domain("UsersDomain");

export const reseyUsers = UsersDomain.event();
export const getUsers = UsersDomain.effect<any, BoardField[], Error>({
  handler: fetchUsers
});

export const usersStore = UsersDomain.store<BoardField[]>([])
  .on(getUsers.done, (_, { result }) => result)
  .on(getUsers.fail, err => console.log("error", err))
  .reset(reseyUsers);

export const UsersCore = () => {
  useEffect(() => {
    getUsers({ isActive: true });
    return () => reseyUsers();
  }, []);
  const data = useStore(usersStore);
  return getUsers.done ? <Board fields={data} /> : <>wait</>;
};

usersStore.watch(v => console.log(33333, v));
