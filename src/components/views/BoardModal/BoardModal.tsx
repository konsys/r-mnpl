import React from "react";
import { useStore } from "effector-react";
import { boardModalStore } from "../../../stores/BoardModalStore";
import { ActionPanel } from "../ActionPanel/ActionPanel";

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