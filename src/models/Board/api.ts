import { OutcomeMessageType } from "../../types/types";
import { client } from "../../http/client";

const URL = `/game/action`;

export async function fetchGameAction({
  action,
}: {
  action: OutcomeMessageType;
}): Promise<any> {
  return await (await client.post(URL, { action })).data;
}
