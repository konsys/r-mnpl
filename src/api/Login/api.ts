import { ILoginResponce } from "../../components/core/Login/Login";
import { client } from "../../http/client";

const loginUrl = `/users/auth/login`;

export const loginFetch = async (params?: any): Promise<ILoginResponce> => {
  const res = await client.post(loginUrl, params);
  return res ? await res.data : null;
};

export const loginVkFetch = async ({
  code,
}: {
  code: string;
}): Promise<boolean> => {
  const res = await client.post("/users/login/vk", { code });
  return res ? await res.data : null;
};
