import { client } from "../../http/client";
import { ILoginResponce } from "../../components/core/Login/Login";

const loginUrl = `/users/auth/login`;

export const loginFetch = async (params?: any): Promise<ILoginResponce> => {
  return await (await client.post(loginUrl, params)).data;
};
