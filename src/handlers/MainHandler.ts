import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent, actionsStore } from "../stores/ActionStore";

export const boardMessageHandler = (message: BoardMessage) => {
  const action = actionsStore.getState();
  const event = message.data.event.action;
  const fields = message.data.boardStatus.fields;
  if (action.actionId !== event._id) {
    console.log("M", fields);

    setCurrentActionEvent({
      actionId: event._id,
      isCompleted: false,
      event: message.data.event,
    });
  }
};
