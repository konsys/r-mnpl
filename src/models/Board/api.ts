import { OutcomeMessageType } from "../../types/types";
import { client } from "../../http/client";

const URL = `/game/action`;

export async function fetchGameAction({
  action,
  fieldId,
}: {
  action: OutcomeMessageType;
  fieldId?: number;
}): Promise<any> {
  return await (await client.post(URL, { action, fieldId })).data;
}
