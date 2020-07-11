import { client } from "../../http/client";
import { IUser, IPlayer } from "../../types/types";

const usersUrl = `/users`;
export const usersFetch = async (params?: any): Promise<IPlayer[]> => {
  return await (await client.get(usersUrl, params)).data;
};

const profileUrl = `/users/profile`;

export async function profile(params?: any): Promise<IUser> {
  return await (await client.get(profileUrl, params)).data;
}
