import { IField } from "../../types/types";
import { client } from "../../http/client";

const URL = `/fields/initial`;

export async function fetchInitFields(params?: any): Promise<IField[]> {
  return await (await client.get(URL, params)).data;
}
