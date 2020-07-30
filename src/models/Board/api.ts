import { IFetchGameAction } from "../../types/types";
import { client } from "../../http/client";

const URL = `/game/action`;

export async function fetchGameAction(data: IFetchGameAction): Promise<any> {
  return await (await client.post(URL, { ...data })).data;
}
