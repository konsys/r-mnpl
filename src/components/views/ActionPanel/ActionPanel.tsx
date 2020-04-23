import React from "react";

export interface ActionPanelProps {
  text: string;
  disabled: boolean;
  onClick: () => void;
}
export const ActionPanel = (props: ActionPanelProps) => (
  <div className="_action1" onClick={props.onClick}>
    {props.text}
  </div>
);
