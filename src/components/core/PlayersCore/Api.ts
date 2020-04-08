import { client } from "../../../http/client";
import { IUser } from "../../views/Players/Players";

const URL = `/users`;

export async function fetchPlayers(params?: any): Promise<IUser[]> {
  return await (await client.get(URL, params)).data;
}
