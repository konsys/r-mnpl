import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";

export const boardMessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  // console.log("MESSAGE", event);

  setCurrentActionEvent({
    action: event.type,
    userId: event.userId,
    actionId: event._id,
    event: message.data.event,
  });
};
