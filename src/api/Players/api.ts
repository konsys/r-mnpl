import { client } from "../../http/client";
import { IPlayer } from "../../types/types";

const profileUrl = `/users/profile`;

export async function fetchPlayers(params?: any): Promise<IPlayer[]> {
  return await (await client.get(profileUrl, params)).data;
}
