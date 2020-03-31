import React from "react";
import { ActionPanel } from "../ActionPanel/ActionPanel";
import { modalStore } from "../../core/GameCore/models/ModalStore";
import { useStore } from "effector-react";

interface TableActions {
  title: string;
  onClick: () => void;
}

export const TableAction = () => {
  const props = useStore(modalStore);
  return (
    <div className="TableAction">
      <div className="TableAction-top">
        <div className="TableAction-top-title">{props.title}</div>
        <div className="TableAction-top-text">
          <div>{props.text}</div>
        </div>
      </div>
      <div className="TableAction-buttons">
        {props.actionButtons?.map((action, k) => (
          <ActionPanel key={k} text={action.title} onClick={action.onClick} />
        ))}
      </div>
    </div>
  );
};
