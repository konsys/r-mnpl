import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent } from "../stores/ActionStore";

export const boardMessageHandler = (message: BoardMessage) => {
  const event = message.data.event.action;
  // console.log("MESSAGE", event);

  setCurrentActionEvent({
    actionId: event._id,
    event: message.data.event,
  });
};
