import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent, actionsStore } from "../stores/ActionStore";

import { fieldsHandler } from "./FieldsHandler";

export const boardMessageHandler = (message: BoardMessage) => {
  const action = actionsStore.getState();
  const event = message.data.event.action;

  fieldsHandler(message.data.boardStatus.fields);
  if (action.actionId !== event._id) {
    setCurrentActionEvent({
      actionId: event._id,
      event: message.data.event,
    });
  }
};
