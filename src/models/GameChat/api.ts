import { client } from "../../http/client";

const url = `/chat`;
export const fetchChat = async (ids?: number[]): Promise<any> => {
  return await (await client.get(url, { params: { ids } })).data;
};
