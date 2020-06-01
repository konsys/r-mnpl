import { BoardMessage } from "../types/BoardTypes";
import { setCurrentActionEvent, actionsStore } from "../stores/ActionStore";

import { fieldsHandler } from "./FieldsHandler";
import { playersHandler } from "./PlayersHandler";

export const boardMessageHandler = (message: BoardMessage) => {
  const action = actionsStore.getState();
  const event = message.data.event.action;
  if (action && event && action.actionId !== event._id) {
    fieldsHandler(message.data.boardStatus.fields);
    playersHandler(message.data.boardStatus.players);

    setCurrentActionEvent({
      actionId: event._id,
      isCompleted: false,
      event: message.data.event,
    });
  }
};
