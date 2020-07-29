import { IContract } from "../../types/types";
import { client } from "../../http/client";

const URL = `/game/contract`;

export async function fetchContract(contract: IContract): Promise<any> {
  return await (await client.post(URL, contract)).data;
}
