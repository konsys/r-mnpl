import { ActionPanel } from "../ActionPanel/ActionPanel";
import React from "react";
import { boardModalStore } from "stores/Board/ModalStore";
import { useStore } from "effector-react";

interface Props {
  isModal: boolean;
}

export const BoardModal = ({ isModal }: Props) => {
  const modal = useStore(boardModalStore);
  return (
    <>
      {isModal && (
        <div className="TableAction">
          <div className="TableAction-top">
            <div className="TableAction-top-title">{modal.title}</div>
            <div className="TableAction-top-text">
              <div>{modal.text}</div>
            </div>
          </div>
          <div className="TableAction-buttons">
            {modal.actionButtons?.map((action, k) => (
              <ActionPanel
                key={k}
                text={action.title}
                disabled={action.disabled}
                onClick={action.onClick}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
