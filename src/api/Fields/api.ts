import { client } from "../../http/client";
import { IField } from "../../types/types";

const URL = `/fields/initial`;

export async function fetchInitFields(params?: any): Promise<IField[]> {
  return await (await client.get(URL, params)).data;
}
