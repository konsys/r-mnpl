import { IField } from "../../types/types";
import { client } from "../../http/client";

const URL = `/game/action`;

export async function ferchGameAction(params?: any): Promise<IField[]> {
  return await (await client.post(URL, params)).data;
}
