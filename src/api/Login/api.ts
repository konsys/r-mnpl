import { ILoginResponce } from "../../components/core/Login/Login";
import { client } from "../../http/client";

const loginUrl = `/users/auth/login`;

export const loginFetch = async (params?: any): Promise<ILoginResponce> => {
  const res = await client.post(loginUrl, params);
  return res ? await res.data : null;
};
