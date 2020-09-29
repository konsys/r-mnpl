import { client } from "../../http/client";

export const inventoryFetch = async (userId: number): Promise<any> => {
  const result = await (await client.get(`/inventory/${userId}`)).data;

  return result;
};
