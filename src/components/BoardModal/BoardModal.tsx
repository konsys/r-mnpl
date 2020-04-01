import React from "react";
import { ActionPanel } from "../ActionPanel/ActionPanel";
import { boardModalStore } from "../../core/models/BoardModalStore";
import { useStore } from "effector-react";

export const BoardModal = () => {
  const modal = useStore(boardModalStore);

  return (
    <>
      <div className="TableAction">
        <div className="TableAction-top">
          <div className="TableAction-top-title">{modal.title}</div>
          <div className="TableAction-top-text">
            <div>{modal.text}</div>
          </div>
        </div>
        <div className="TableAction-buttons">
          {modal.actionButtons?.map((action, k) => (
            <ActionPanel key={k} text={action.title} onClick={action.onClick} />
          ))}
        </div>
      </div>
      }
    </>
  );
};
