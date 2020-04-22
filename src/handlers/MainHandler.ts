import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent, actionsStore } from "../stores/ActionStore";

import { fieldsHandler } from "./FieldsHandler";

export const boardMessageHandler = (message: BoardMessage) => {
  const action = actionsStore.getState();
  const event = message.data.event.action;

  if (action.actionId !== event._id) {
    fieldsHandler(message.data.boardStatus.fields);
    setCurrentActionEvent({
      actionId: event._id,
      event: message.data.event,
    });
  }
};
