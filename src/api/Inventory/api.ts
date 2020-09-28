import { client } from "../../http/client";

export const inventoryFetch = async (userId: number): Promise<any> => {
  return await (await client.get(`/inventory/${userId}`)).data;
};
