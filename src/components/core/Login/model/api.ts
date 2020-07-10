import { client } from "../../../../http/client";
import { ILoginResponce } from "../Login";
import { IUser } from "../../../../types/types";

const loginUrl = `/users/auth/login`;
const usersUrl = `/user/me`;

export const loginFetch = async (params?: any): Promise<ILoginResponce> => {
  return await (await client.post(loginUrl, params)).data;
};

export const userFetch = async (params?: any): Promise<IUser> => {
  return await (await client.get(usersUrl, params)).data;
};
