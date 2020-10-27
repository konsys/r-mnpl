import { testUser, testVipUser } from "./user";

import { IChatMessage } from "components/core/Game/GameChat/ChatMessage";

export const testChatMessage: IChatMessage = {
  fromUser: testUser,
  replies: [testUser, testVipUser],
  message: "this is test message",
  time: new Date(),
};
