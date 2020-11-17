import { OutcomeMessageType } from "types/types";
import fetch from "node-fetch";
import { sendBoardAction } from "stores/Board/ActionStore";
import { testContract } from "testMocks/contract";
// TODO remove
export const createUser = async () => {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
  });
  const userId = await response.text();
  sendBoardAction({
    action: OutcomeMessageType.OUTCOME_CONTRACT_DECLINE,
    contract: testContract,
  });
  return userId;
};
