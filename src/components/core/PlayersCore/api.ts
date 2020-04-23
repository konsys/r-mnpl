import { client } from "../../../http/client";
import { IPlayer } from "../../../types/BoardTypes";

const URL = `/users`;

export async function fetchPlayers(params?: any): Promise<IPlayer[]> {
  return await (await client.get(URL, params)).data;
}
