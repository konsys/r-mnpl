import { IPlayer, IUser } from "../../types/types";

import { client } from "../../http/client";

const usersUrl = `/users`;
export const usersFetch = async (ids?: number[]): Promise<IPlayer[]> => {
  return await (await client.get(usersUrl, { params: { ids } })).data;
};

const profileUrl = `/users/profile`;

export async function fetchUserProfile(params?: any): Promise<IUser> {
  return await (await client.get(profileUrl, params)).data;
}
