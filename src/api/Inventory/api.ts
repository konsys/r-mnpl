import { IInventory } from "types/types";
import { client } from "../../http/client";

export const inventoryFetch = async (userId: number): Promise<IInventory> => {
  const result = await (await client.get(`/inventory/${userId}`)).data;

  return result;
};
