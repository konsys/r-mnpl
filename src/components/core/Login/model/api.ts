import { client } from "../../../../http/client";
import { IPlayer } from "../../../../types/types";

const URL = `/users/ath/login`;

export const login = async (params?: any): Promise<IPlayer[]> => {
  return await (await client.post(URL, params)).data;
};
