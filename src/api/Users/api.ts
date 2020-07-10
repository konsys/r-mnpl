import { client } from "../../http/client";
import { IUser } from "../../types/types";

const usersUrl = `/users/profile`;

export const userFetch = async (params?: any): Promise<IUser> => {
  return await (await client.get(usersUrl, params)).data;
};
