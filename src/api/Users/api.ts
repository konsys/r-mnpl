import { IPlayer, IUser } from "../../types/types";

import { client } from "../../http/client";

const usersUrl = `/users`;
const initUsersUrl = `/users/init`;
export const initUsersFetch = async ({
  ids,
  gameId,
}: {
  ids: number[];
  gameId: string;
}): Promise<IPlayer[]> => {
  console.log(111111111111, ids);
  return await (await client.get(initUsersUrl, { params: { ids, gameId } }))
    .data;
};

export const usersFetch = async (ids: number[]): Promise<IPlayer[]> => {
  return await (await client.get(usersUrl, { params: { ids } })).data;
};

const profileUrl = `/users/profile`;

export async function fetchUserProfile(params?: any): Promise<IUser> {
  return await (await client.get(profileUrl, params)).data;
}
