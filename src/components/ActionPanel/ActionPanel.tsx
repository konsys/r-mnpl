import React from "react";

export interface ActionPanelProps {
  text: string;
  onClick: () => void;
}
export const ActionPanel = (props: ActionPanelProps) => (
  <div className="TableAction-buttons">
    <div className="_action" onClick={props.onClick}>
      {props.text}
    </div>
  </div>
);
