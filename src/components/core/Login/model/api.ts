import { client } from "../../../../http/client";
import { ILoginResponce } from "../Login";

const URL = `/users/auth/login`;

export const loginFetch = async (params?: any): Promise<ILoginResponce> => {
  return await (await client.post(URL, params)).data;
};
