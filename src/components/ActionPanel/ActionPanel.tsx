import React from "react";

export interface ActionPanelProps {
  text: string;
  turn: () => void;
}
export const ActionPanel = (props: ActionPanelProps) => (
  <div className="TableAction-buttons">
    <div className="_action" onClick={props.turn}>
      {props.text}
    </div>
  </div>
);
