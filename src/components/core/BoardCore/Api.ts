import { client } from "../../../http/client";
import { BoardField } from "../../views/Field/Field";

const URL = `/fields/initial`;

export async function fetchInitFields(params?: any): Promise<BoardField[]> {
  return await (await client.get(URL, params)).data;
}
