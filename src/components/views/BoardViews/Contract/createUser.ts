import { OutcomeMessageType } from "types/types";
import fetch from "node-fetch";
import { sendBoardAction } from "stores/Board/ActionStore";
import { testContract } from "testMocks/contract";

export const createUser = async () => {
  const response = await fetch("http://website.com/users", { method: "POST" });
  const userId = await response.text();
  sendBoardAction({
    action: OutcomeMessageType.OUTCOME_CONTRACT_DECLINE,
    contract: testContract,
  });
  return userId;
};
